import api from '../base'
import { URLS } from '../../constants'
import { IMovie } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'
import movieHelpers from './helpers'

export default async function getMovie(id: number): Promise<IResponse<IMovie>> {
  try {
    const { data, status } = await api.client.get<IMovie>(URLS.DETAIL(String(id)))

    const preparedResponse = await movieHelpers.prepareMovies([data])

    return api.response.success(preparedResponse[0] ?? data, status)
  } catch (error) {
    return api.response.error(error)
  }
}
