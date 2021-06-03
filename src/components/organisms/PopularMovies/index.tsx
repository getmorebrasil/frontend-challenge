import { useCallback, memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Classification } from '../../molecules'
import { truncateString } from '../../../helpers'
import { Categories, ContentOffset } from '../../atoms'
import { PopularMoviesProps } from '../../../libs/types/organisms'
import { Container, MoviesList, MovieCard, Overlay } from './styles'

const PopularMovies: React.FC<PopularMoviesProps> = ({ data }) => {
  const router = useRouter()

  const formattedData = useMemo(() => {
    const result = data.map((movie) => {
      return {
        ...movie,
        formattedGenres: truncateString(movie.formattedGenres, 35),
      }
    })

    return result
  }, [data])

  const handleGetDetail = useCallback(
    (movieId: number) => {
      router.push(`/movie/${movieId}`)
    },
    [router]
  )

  return (
    <Container>
      <h2>Populars</h2>

      <MoviesList>
        {formattedData.map((movie) => (
          <MovieCard
            key={movie.id}
            imagePath={movie.poster_path}
            onClick={() => handleGetDetail(movie.id)}
          >
            <Overlay>
              <Categories>{movie.formattedGenres}</Categories>
              <Classification classification={movie.vote_average} starsSize={1.2} />
            </Overlay>
          </MovieCard>
        ))}
        <ContentOffset />
      </MoviesList>
    </Container>
  )
}

export default memo(PopularMovies, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})
