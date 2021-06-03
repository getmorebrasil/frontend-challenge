import api from '../base'
import { IAuth, ICredentials } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'
import { URLS } from '../../constants'

export default async function createAuth(
  data: Omit<ICredentials, 'confirmPassword'>
): Promise<IResponse<IAuth>> {
  try {
    const { data: authData } = await api.next.post(URLS.AUTH, data)

    return api.response.success(authData, 201)
  } catch (error) {
    const { message, description } = error.response.data

    if (description) error.response.data.message = `${message} ${description}`

    return api.response.error(error)
  }
}
