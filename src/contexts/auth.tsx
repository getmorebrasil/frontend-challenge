import React, { useCallback, useState } from 'react'
import { setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { IAuthContextData } from '../libs/interfaces/contexts'
import { authService } from '../services'
import { storageToken } from '../utils'

export const AuthContext = React.createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const router = useRouter()

  const storageEmail = useCallback((email) => {
    setCookie(null, 'getmovies.email', email)
  }, [])

  const persistAuthenticate = useCallback(
    (token: string, email: string) => {
      storageToken(token)
      storageEmail(email)
    },
    [storageEmail]
  )

  const createAuth = useCallback(
    async (credentials) => {
      const { success, data, errors } = await authService.createAuth(credentials)

      if (success && data) {
        persistAuthenticate(data.token, data.email)
        router.push('/home')
        return
      }

      let errorMessage = 'Something went wrong!'
      if (errors) errorMessage = errors

      Swal.fire('Error...', errorMessage, 'error')
    },
    [persistAuthenticate, router]
  )

  const logout = useCallback(async () => {
    destroyCookie(null, 'getmovies.email')
    destroyCookie(null, 'getmovies.token')

    router.push('/')
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        logout,
        loading,
        setLoading,
        createAuth,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
