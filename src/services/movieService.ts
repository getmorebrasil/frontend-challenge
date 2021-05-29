import * as baseService from './baseService'
import { URLS } from '../constants'
import { IResponse, ITheMovieDBListResponse } from '../libs/interfaces/services'
import { ICredits, IMovie, IShowCaseIMovie } from '../libs/interfaces/contexts'

async function getShowCaseMovie(): Promise<IResponse<IShowCaseIMovie>> {
  try {
    const response = await baseService.client.get<ITheMovieDBListResponse<IShowCaseIMovie[]>>(
      URLS.TOP_RATED
    )

    return baseService.mergeSuccess(response.data.results[0], response.status)
  } catch (error) {
    return baseService.mergeError(error)
  }
}

async function getPopulars(): Promise<IResponse<IMovie[]>> {
  try {
    const response = await baseService.client.get<ITheMovieDBListResponse<IMovie[]>>(URLS.POPULARS)

    return baseService.mergeSuccess(response.data.results, response.status)
  } catch (error) {
    return baseService.mergeError(error)
  }
}

async function getMovies(): Promise<IResponse<IMovie[]>> {
  try {
    const response = await baseService.client.get<ITheMovieDBListResponse<IMovie[]>>(URLS.TOP_RATED)

    return baseService.mergeSuccess(response.data.results, response.status)
  } catch (error) {
    return baseService.mergeError(error)
  }
}

async function getMovie(id: number): Promise<IResponse<IMovie>> {
  try {
    const response = await baseService.client.get<IResponse<IMovie>>(URLS.DETAIL(String(id)))

    return baseService.mergeSuccess(response.data, response.status)
  } catch (error) {
    return baseService.mergeError(error)
  }
}

async function getMovieCredits(id: number): Promise<IResponse<ICredits>> {
  try {
    const response = await baseService.client.get<ICredits[]>(URLS.CREDITS(String(id)))

    return baseService.mergeSuccess(response.data, response.status)
  } catch (error) {
    return baseService.mergeError(error)
  }
}

const movieService = {
  getPopulars,
  getShowCaseMovie,
  getMovies,
  getMovie,
  getMovieCredits,
}

export default movieService
