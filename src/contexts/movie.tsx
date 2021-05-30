import React, { useCallback, useEffect, useState } from 'react'
import { useGenre } from '../hooks'
import { IMovie, IShowCaseIMovie, IMovieContextData } from '../libs/interfaces/contexts'
import { IResponse } from '../libs/interfaces/services'
import { movieService } from '../services'

export const MovieContext = React.createContext<IMovieContextData>({} as IMovieContextData)

const MovieProvider: React.FC = ({ children }) => {
  const { getGenres, formatGenres } = useGenre()

  useEffect(() => {
    getGenres()
  }, [getGenres])

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [populars, setPopulars] = useState<IMovie[]>([])
  const [showCaseMovie, setShowCaseMovie] = useState<IShowCaseIMovie>({} as IShowCaseIMovie)

  const getShowCaseMovie = useCallback(async (): Promise<IResponse<IShowCaseIMovie>> => {
    const response = await movieService.getShowCaseMovie()

    if (response.data) setShowCaseMovie(response.data)

    return response
  }, [])

  const extractDirectorName = useCallback((movie: IMovie) => {
    const director = movie.credits?.crew.find((item) => item.job === 'Director')

    if (director) return { ...movie, directorName: director.name }

    return movie
  }, [])

  const getMovie = useCallback(
    async (id): Promise<IResponse<IMovie>> => {
      setLoading(true)

      const response = await movieService.getMovie(id)

      if (response.success && response.data) {
        const movie = response.data

        const { data } = await movieService.listCredits(movie.id)

        const updatedMovie = extractDirectorName({ ...movie, credits: data })

        const formattedGenres = formatGenres(movie.genres.map((genre) => genre.id))

        response.data = { ...updatedMovie, formattedGenres }
      }

      return response
    },
    [extractDirectorName, formatGenres]
  )

  const getMovieCredits = useCallback(
    async (_movies: IMovie[]): Promise<IMovie[]> => {
      const moviesWithCredits = await Promise.all(
        _movies.map(async (movie) => {
          const { data } = await movieService.listCredits(movie.id)

          const updatedMovie = extractDirectorName({ ...movie, credits: data })

          return updatedMovie
        })
      )

      return moviesWithCredits
    },
    [extractDirectorName]
  )

  const prepareMovies = useCallback(
    async (__movies: IMovie[]) => {
      if (__movies) {
        const responseData = await getMovieCredits(
          __movies.map((movie) => {
            const formattedGenres = formatGenres(movie.genre_ids)

            return { ...movie, formattedGenres }
          })
        )

        return responseData
      }
    },
    [formatGenres, getMovieCredits]
  )

  const getPopulars = useCallback(async (): Promise<IResponse<IMovie[]>> => {
    const response = await movieService.listPopulars()

    if (response.data) {
      const preparedMovies = await prepareMovies(response.data)

      if (preparedMovies) setPopulars(preparedMovies)
    }

    return response
  }, [prepareMovies])

  const getMovies = useCallback(async (): Promise<IResponse<IMovie[]>> => {
    const response = await movieService.listMovies()

    if (response.data) {
      const preparedMovies = await prepareMovies(response.data)

      if (preparedMovies) setMovies(preparedMovies)
    }

    return response
  }, [prepareMovies])

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        getMovie,
        populars,
        getMovies,
        setLoading,
        getPopulars,
        showCaseMovie,
        getShowCaseMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
