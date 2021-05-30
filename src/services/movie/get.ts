import api from '../base'
import { URLS } from '../../constants'
import { IMovie } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'

export default async function getMovie(id: number): Promise<IResponse<IMovie>> {
  try {
    const response = await api.client.get<IResponse<IMovie>>(URLS.DETAIL(String(id)))

    return api.response.success(response.data, response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
