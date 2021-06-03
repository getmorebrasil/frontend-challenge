import api from '../base'
import { URLS } from '../../constants'
import { ICredits } from '../../libs/interfaces/contexts'
import { IResponse } from '../../libs/interfaces/services'

export default async function listMovieCredits(id: number): Promise<IResponse<ICredits>> {
  try {
    const response = await api.client.get<ICredits[]>(URLS.CREDITS(String(id)))

    return api.response.success(response.data, response.status)
  } catch (error) {
    return api.response.error(error)
  }
}
