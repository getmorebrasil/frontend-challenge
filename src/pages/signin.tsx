import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FormHandles } from '@unform/core'
import styled from 'styled-components'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { Button, Input } from '../components/atoms'
import { FormContainer } from '../components/molecules'
import { signIn } from '../libs/validators'
import { ISignIn } from '../libs/interfaces/pages'
import { getValidationErrors } from '../utils'
import { useAuth } from '../hooks'
import { centerFlex } from '../styles/global'

export const Container = styled.main`
  ${centerFlex};
  height: 100vh;
`

export default function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { loading, setLoading, createAuth } = useAuth()

  const handleSubmit = useCallback(
    async (data: ISignIn): Promise<void> => {
      try {
        formRef.current?.setErrors({})

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
    [createAuth, router, setLoading]
  )

  return (
    <Container>
      <FormContainer formRef={formRef} handleSubmit={handleSubmit}>
        <Input name="email" label="Email" required />
        <Input name="password" label="Password" required />
        <Button text="Sign In" isLoading={loading} />
        <Link href="/signup">Do not have an account? Sign Up</Link>
      </FormContainer>
    </Container>
  )
}
