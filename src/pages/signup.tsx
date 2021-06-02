import { FormHandles } from '@unform/core'
import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useUser } from '../hooks'
import { ISignUp } from '../libs/interfaces/pages'
import { Button, Input } from '../components/atoms'
import { FormContainer } from '../components/molecules'
import { centerFlex, backgroundImageStyle } from '../styles/shared'
import { withSSRGuest } from '../utils'

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

export default function SignUp() {
  const formRef = useRef<FormHandles>(null)
  const { loading, createUser } = useUser()

  const handleSubmit = useCallback(
    async (data: ISignUp): Promise<void> => {
      try {
        formRef.current?.setErrors({})

        const { signUp } = await import('../libs/validators')

        await signUp.validate(data, {
          abortEarly: false,
        })

        await createUser({
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
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
      }
    },
    [createUser]
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

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  }
})
