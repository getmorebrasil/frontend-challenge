import { genreService } from '..'
import creditsService from '../credits'
import { IGenre, IMovie } from '../../libs/interfaces/contexts'

async function prepareMovies(moviesToPrepare: IMovie[]) {
  const { data } = await genreService.listGenres()

  const responseData = await getMovieCredits(
    moviesToPrepare.map((movie) => {
      let formattedGenres = ''
      if (data)
        formattedGenres = formatGenres(
          movie.genre_ids ?? movie.genres.map((genre) => genre.id),
          data.genres
        )

      return { ...movie, formattedGenres }
    })
  )

  return responseData
}

function formatGenres(genreIds: number[], genres: IGenre[]) {
  let result = ''

  if (genres.length > 0) {
    result = genres
      ?.map((genre) => genreIds.includes(genre.id) && genre.name)
      .filter((genre) => Boolean(genre) === true)
      .join(', ')
  }

  return result
}

async function getMovieCredits(moviesToApplyCredits: IMovie[]): Promise<IMovie[]> {
  const moviesWithCredits = await Promise.all(
    moviesToApplyCredits.map(async (movie) => {
      const { data } = await creditsService.listMovieCredits(movie.id)

      const updatedMovie = extractDirectorName({ ...movie, credits: data })

      return updatedMovie
    })
  )

  return moviesWithCredits
}

async function extractDirectorName(movie: IMovie) {
  const director = movie.credits?.crew.find((item) => item.job === 'Director')

  if (director) return { ...movie, directorName: director.name }

  return movie
}

const helpers = { formatGenres, prepareMovies, getMovieCredits, extractDirectorName }

export default helpers
