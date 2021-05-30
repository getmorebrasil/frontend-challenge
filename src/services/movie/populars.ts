import api from '../base'
import { IMovie } from '../../libs/interfaces/contexts'
import { IResponse, ITheMovieDBListResponse } from '../../libs/interfaces/services'
import { URLS } from '../../constants'

export default async function listPopulars(): Promise<IResponse<IMovie[]>> {
  try {
    const response = await api.client.get<ITheMovieDBListResponse<IMovie[]>>(URLS.POPULARS)

    return api.response.success(response.data, response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
