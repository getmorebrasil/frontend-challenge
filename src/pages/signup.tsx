import { FormHandles } from '@unform/core'
import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { useAuth, useUser } from '../hooks'
import { signUp } from '../libs/validators'
import { ISignUp } from '../libs/interfaces/pages'
import { getValidationErrors } from '../utils'
import { Button, Input } from '../components/atoms'
import { FormContainer } from '../components/molecules'
import { centerFlex, backgroundImageStyle } from '../styles/global'

export const Container = styled.main`
  ${centerFlex};
  ${backgroundImageStyle};
  background: url('/background.jpg') rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  padding: 1rem;
`

export const Content = styled.section`
  ${centerFlex};
  flex-direction: column;

  & p {
    margin-top: 2rem;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

    & > span {
      margin-left: 6px;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { loading, createUser } = useUser()
  const { setIsAuthenticated } = useAuth()

  const handleSubmit = useCallback(
    async (data: ISignUp): Promise<void> => {
      try {
        formRef.current?.setErrors({})

        await signUp.validate(data, {
          abortEarly: false,
        })

        const response = await createUser({
          email: data.email,
          password: data.password,
        })

        if (response?.data?.token) {
          setIsAuthenticated(true)
          router.push('/signed')
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)

          return
        }

        Swal.fire('Error...', 'Something went wrong!', 'error')
      }
    },
    [createUser, router, setIsAuthenticated]
  )

  return (
    <>
      <Head>
        <title>getmovies | Criar conta</title>
        <meta name="description" content="Criar conta no portal getmovies" />
      </Head>
      <Container>
        <Content>
          <FormContainer formRef={formRef} handleSubmit={handleSubmit}>
            <Input name="email" label="Email" required />
            <Input name="password" label="Password" required />
            <Input name="confirmPassword" label="Confirm Password" required />
            <Button text="Sign Up Now" isLoading={loading} />
          </FormContainer>
          <Link href="/signin">
            <p>
              Already have an account? <span>Sign In</span>
            </p>
          </Link>
        </Content>
      </Container>
    </>
  )
}

export default SignUp
