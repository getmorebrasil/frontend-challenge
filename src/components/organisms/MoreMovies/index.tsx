import { useCallback, memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import { truncateString } from '../../../helpers'
import { MoreMoviesProps } from '../../../libs/types/organisms'
import { Button, Categories } from '../../atoms'
import { Classification } from '../../molecules'

import { Container, Movie, MoviePoster, CenterContent, RightSide } from './styles'

const MoreMovies: React.FC<MoreMoviesProps> = ({ data }) => {
  const router = useRouter()

  const formattedData = useMemo(() => {
    const result = data.map((movie) => {
      return {
        ...movie,
        title: truncateString(movie.title, 30),
        overview: truncateString(movie.overview, 250),
        formattedGenres: truncateString(movie.formattedGenres, 24),
      }
    })

    return result
  }, [data])

  const handleGetDetails = useCallback(
    (movieId: number) => {
      router.push(`/movie/${movieId}`)
    },
    [router]
  )

  return (
    <Container>
      <h2>More Movies</h2>

      {formattedData.map((movie) => (
        <Movie key={movie.id}>
          <MoviePoster src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          <CenterContent>
            <h2>{movie.title}</h2>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </CenterContent>
          <RightSide>
            <Categories fontSize={1.6}>{movie.formattedGenres}</Categories>
            <Classification classification={movie.vote_average} />

            <Button text="Get Details" handleAction={() => handleGetDetails(movie.id)} />

            {movie.directorName && (
              <h5>
                Director <span>{movie.directorName}</span>
              </h5>
            )}
          </RightSide>
        </Movie>
      ))}
    </Container>
  )
}

export default memo(MoreMovies, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})
