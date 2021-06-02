import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { query as q, ExprArg } from 'faunadb'
import bcrypt from 'bcryptjs'
import { fauna } from '../../services/fauna'
import { signIn } from '../../libs/validators'
import { FaunaResponse, User } from '../../libs/types/api'

const renderUnauthorized = (response: NextApiResponse) => {
  response.status(401).json({ message: 'Credentials does not match.' })
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (!(await signIn.isValid(request.body)))
    return response
      .status(400)
      .json({ error: 'Validation failed! Please check the data provided.' })

  const { email, password } = request.body

  try {
    const { data } = await fauna.query<FaunaResponse<[ExprArg]>>(
      q.Paginate(q.Match(q.Index('user_by_email'), email))
    )

    if (!data[0]) return renderUnauthorized(response)

    const { data: user } = await fauna.query<FaunaResponse<User>>(q.Get(data[0]))

    if (!user || !(await bcrypt.compare(password, user.password)))
      return renderUnauthorized(response)

    return response.status(201).json({
      email: user.email,
      token: jwt.sign({ id: user.email }, process.env.JWT_SECRET || '', {
        expiresIn: '7d',
      }),
    })
  } catch (error) {
    const { description } = error

    return response
      .status(400)
      .json({ message: 'Something went wrong authenticating.', description })
  }
}
