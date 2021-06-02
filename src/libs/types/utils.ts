import { Dispatch, SetStateAction } from 'react'

export type withSSGAuthParams = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  setLoading: Dispatch<SetStateAction<boolean>>
}
