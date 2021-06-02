import api from '../base'
import { IAuth, ICredentials } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'
import { URLS } from '../../constants'

export default async function createUser(data: ICredentials): Promise<IResponse<IAuth>> {
  try {
    const { data: userData } = await api.next.post(URLS.USERS, data)

    return api.response.success(userData, 201)
  } catch (error) {
    const { message, description } = error.response.data

    if (description) error.response.data.message = `${message} ${description}`

    return api.response.error(error)
  }
}
