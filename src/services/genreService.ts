import * as baseService from './baseService'
import { URLS } from '../constants'
import { IResponse } from '../libs/interfaces/services'
import { IGenre } from '../libs/interfaces/contexts'

async function getGenres(): Promise<IResponse<IGenre[]>> {
  try {
    const response = await baseService.client.get<{ genres: IGenre[] }>(URLS.GENRES)

    return baseService.mergeSuccess(response.data.genres, response.status)
  } catch (error) {
    return baseService.mergeError(error)
  }
}

const genreService = { getGenres }

export default genreService
