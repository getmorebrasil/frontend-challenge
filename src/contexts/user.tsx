import React, { useCallback, useState } from 'react'
import { IUserContextData, IUser } from '../libs/interfaces/contexts'
import api from '../services/base'
import { userService } from '../services'
import { storageToken } from '../utils'

export const UserContext = React.createContext<IUserContextData>({} as IUserContextData)

const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({} as IUser)

  const storageUser = useCallback((userData) => {
    setUser(userData)
    localStorage.setItem('@HuskyFire:user', JSON.stringify(userData))
  }, [])

  const persistAuthenticate = useCallback(
    (token: string, userToPersist: IUser) => {
      storageUser(userToPersist)
      storageToken(token)
      api.actions.applyToken(token, api.client)
    },
    [storageUser]
  )

  const createUser = useCallback(
    async (userData) => {
      setLoading(true)

      const response = await userService.createUser(userData)

      if (response.success && response?.data?.token) {
        persistAuthenticate(response.data.token, response.data.user)
      }

      return response
    },
    [persistAuthenticate]
  )

  return (
    <UserContext.Provider
      value={{
        loading,
        createUser,
        setLoading,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
