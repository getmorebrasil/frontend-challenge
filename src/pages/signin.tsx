import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { FormHandles } from '@unform/core'
import styled from 'styled-components'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { Button, Input } from '../components/atoms'
import { FormContainer } from '../components/molecules'
import { ISignIn } from '../libs/interfaces/pages'
import { useAuth } from '../hooks'
import { backgroundImageStyle, centerFlex } from '../styles/global'

export const Container = styled.main`
  ${centerFlex};
  ${backgroundImageStyle};
  background: url('/background.jpg') rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  padding: 3rem;
`

export const Content = styled.section`
  ${centerFlex};
  flex-direction: column;

  & p {
    margin-top: 2rem;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    cursor: pointer;

    & > span {
      margin-left: 6px;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`

export default function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { loading, createAuth } = useAuth()

  const handleSubmit = useCallback(
    async (data: ISignIn): Promise<void> => {
      try {
        formRef.current?.setErrors({})

        const { signIn } = await import('../libs/validators')

        await signIn.validate(data, {
          abortEarly: false,
        })

        const response = await createAuth({
          email: data.email,
          password: data.password,
        })

        if (response.success && response?.data?.token) {
          router.push('/')
          return
        }

        Swal.fire('Error...', response.errors, 'error')
      } catch (error) {
        const { ValidationError } = await import('yup')
        const { getValidationErrors } = await import('../utils')

        if (error instanceof ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)

          return
        }

        Swal.fire('Error...', 'Something went wrong!', 'error')
      }
    },
    [createAuth, router]
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
            <Input name="password" label="Password" required />
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
