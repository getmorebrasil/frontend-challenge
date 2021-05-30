import React, { useCallback, useEffect, useState } from 'react'
import { IAuthContextData, IUser } from '../libs/interfaces/contexts'
import { authService } from '../services'
import { storageToken } from '../utils'
import api from '../services/base'

export const AuthContext = React.createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const storageUser = useCallback((userData) => {
    localStorage.setItem('getmovies.user', JSON.stringify(userData))
  }, [])

  const persistAuthenticate = useCallback(
    (token: string, user: IUser) => {
      setIsAuthenticated(true)
      storageToken(token)
      storageUser(user)
      api.actions.applyToken(token, api.client)
    },
    [storageUser]
  )

  useEffect(() => {
    const storagedToken = localStorage.getItem('getmovies.token')
    const storagedUser = localStorage.getItem('getmovies.user')

    if (storagedUser && storagedToken) {
      persistAuthenticate(storagedToken, JSON.parse(storagedUser))
    } else {
      setIsAuthenticated(false)
    }

    setLoading(false)
  }, [persistAuthenticate])

  const createAuth = useCallback(
    async (credentials) => {
      setLoading(true)

      const response = await authService.createAuth(credentials)

      if (response.success && response?.data?.token) {
        persistAuthenticate(response.data.token, response.data.user)
      }

      return response
    },
    [persistAuthenticate]
  )

  const logout = useCallback(async () => {
    localStorage.removeItem('getmovies.user')
    localStorage.removeItem('getmovies.token')
    setIsAuthenticated(false)
    api.actions.unstickToken(api.client)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        createAuth,
        isAuthenticated,
        setIsAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
