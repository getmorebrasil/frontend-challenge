import React, { useCallback, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { IUserContextData } from '../libs/interfaces/contexts'
import { userService } from '../services'
import { storageToken } from '../utils'
import { truncateString } from '../helpers'

export const UserContext = React.createContext<IUserContextData>({} as IUserContextData)

const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    const { 'getmovies.email': storagedEmail } = parseCookies()

    setEmail(truncateString(storagedEmail, 38))
  }, [])

  const storageEmail = useCallback((emailToStorage) => {
    setEmail(emailToStorage)
    setCookie(null, 'getmovies.email', emailToStorage)
  }, [])

  const persistAuthenticate = useCallback(
    (token: string, emailToPersist: string) => {
      storageEmail(emailToPersist)
      storageToken(token)
    },
    [storageEmail]
  )

  const createUser = useCallback(
    async (userData) => {
      setLoading(true)
      const { data } = await userService.createUser(userData)
      setLoading(false)

      if (data) persistAuthenticate(data.token, data.email)
      router.push('/signed')
    },
    [persistAuthenticate, router]
  )

  return (
    <UserContext.Provider
      value={{
        email,
        loading,
        createUser,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
