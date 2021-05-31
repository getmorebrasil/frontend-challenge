import api from '../base'
import { IAuth, ICredentials } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'

export default async function createAuth(data: ICredentials): Promise<IResponse<IAuth>> {
  try {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000)
    })

    await promise

    return api.response.success({ user: {}, token: 'token' }, 201)
  } catch (error) {
    return api.response.error(error)
  }
}
