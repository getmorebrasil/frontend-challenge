import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { query as q } from 'faunadb'
import bcrypt from 'bcryptjs'
import { fauna } from '../../services/fauna'
import { signUp } from '../../libs/validators'
import { IFaunaResponse } from '../../libs/interfaces/api'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (!(await signUp.isValid(request.body)))
    return response
      .status(400)
      .json({ error: 'Validation failed! Please check the data provided.' })

  const { email } = request.body
  const password = await bcrypt.hash(request.body.password, 8)

  try {
    const { ref, data: user } = await fauna.query<IFaunaResponse>(
      q.Create(q.Collection('users'), { data: { email, password } })
    )

    return response.status(201).json({
      email: user.email,
      token: jwt.sign({ id: ref.id, email: user.email }, process.env.JWT_SECRET || '', {
        expiresIn: '7d',
      }),
    })
  } catch (error) {
    const { description } = error

    return response
      .status(400)
      .json({ message: 'Something went wrong creating user.', description })
  }
}
