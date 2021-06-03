import { useCallback, useRef, useState } from 'react'
import Head from 'next/head'
import { FormHandles } from '@unform/core'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { Button, Input } from '../components/atoms'
import { FormContainer } from '../components/molecules'
import { ISignIn } from '../libs/interfaces/pages'
import { useAuth } from '../hooks'
import { withSSRGuest } from '../utils'
import { Container, Content } from '../styles/pages'

export default function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const { createAuth } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (data: ISignIn): Promise<void> => {
      try {
        setLoading(true)

        formRef.current?.setErrors({})

        const { signIn } = await import('../libs/validators')

        await signIn.validate(data, {
          abortEarly: false,
        })

        await createAuth({
          email: data.email,
          password: data.password,
        })
      } catch (error) {
        const { ValidationError } = await import('yup')
        const { getValidationErrors } = await import('../utils')

        if (error instanceof ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)

          return
        }

        Swal.fire('Error...', 'Something went wrong!', 'error')
      } finally {
        setLoading(false)
      }
    },
    [createAuth]
  )

  return (
    <>
      <Head>
        <title>getmovies | Acessar contar</title>
        <meta name="description" content="Acessar conta no portal getmovies" />
      </Head>
      <Container>
        <Content>
          <FormContainer formRef={formRef} handleSubmit={handleSubmit}>
            <Input name="email" label="Email" required />
            <Input type="password" name="password" label="Password" required />
            <Button text="Sign In" isLoading={loading} />
          </FormContainer>
          <Link href="/signup">
            <p>
              Do not have an account? <span>Register now</span>
            </p>
          </Link>
        </Content>
      </Container>
    </>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  }
})
