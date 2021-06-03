import api from '../base'
import { URLS } from '../../constants'
import { IResponse } from '../../libs/interfaces/services'
import { IGenre } from '../../libs/interfaces/contexts'

export default async function listGenres(): Promise<IResponse<{ genres: IGenre[] }>> {
  try {
    const response = await api.client.get<{ genres: IGenre[] }>(URLS.GENRES)

    return api.response.success(response.data, response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
