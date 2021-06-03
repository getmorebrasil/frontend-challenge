import { setCookie } from 'nookies'

export default function storageToken(token: string) {
  setCookie(null, 'getmovies.token', token)
}
