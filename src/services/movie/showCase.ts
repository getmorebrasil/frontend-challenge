import api from '../base'
import { IShowCaseIMovie } from '../../libs/interfaces/contexts'
import { IResponse, ITheMovieDBListResponse } from '../../libs/interfaces/services'
import { URLS } from '../../constants'

export default async function getShowCaseMovie(): Promise<IResponse<IShowCaseIMovie>> {
  try {
    const response = await api.client.get<ITheMovieDBListResponse<IShowCaseIMovie[]>>(
      URLS.TOP_RATED
    )

    return api.response.success(response.data.results[0], response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
