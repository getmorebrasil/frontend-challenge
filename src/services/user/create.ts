import axios from 'axios'
import api from '../base'
import { URLS } from '../../constants'
import { IAuth, ICredentials } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'

export default async function createUser(data: ICredentials): Promise<IResponse<IAuth>> {
  try {
    const response = await axios.post(URLS.AUTH, data)

    return api.response.success(response.data.genres, response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
