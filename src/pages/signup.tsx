import { FormHandles } from '@unform/core'
import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { useAuth, useUser } from '../hooks'
import { signUp } from '../libs/validators'
import { ISignUp } from '../libs/interfaces/pages'
import { getValidationErrors } from '../utils'
import { Button, Input } from '../components/atoms'
import { FormContainer } from '../components/molecules'
import { centerFlex } from '../styles/global'

export const Container = styled.main`
  ${centerFlex};
  height: 100vh;
`

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { loading, setLoading, createUser } = useUser()
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
      } finally {
        setLoading(false)
      }
    },
    [createUser, router, setIsAuthenticated, setLoading]
  )

  return (
    <Container>
      <FormContainer formRef={formRef} handleSubmit={handleSubmit}>
        <Input name="email" label="Email" required />
        <Input name="password" label="Password" required />
        <Input name="confirmPassword" label="Confirm Password" required />
        <Button text="Sign Up Now" isLoading={loading} />
        <Link href="/signin">Already have an account? Sign In</Link>
      </FormContainer>
    </Container>
  )
}

export default SignUp
