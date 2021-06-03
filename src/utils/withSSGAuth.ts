import { parseCookies } from 'nookies'
import { withSSGAuthParams } from '../libs/types/utils'

export default function withSSGAuth({ setIsAuthenticated, setLoading }: withSSGAuthParams) {
  const { 'getmovies.token': token } = parseCookies()

  if (token) setIsAuthenticated(true)

  setLoading(false)
}
