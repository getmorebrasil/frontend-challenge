import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Classification } from '../../molecules'
import { truncateString } from '../../../helpers'
import { Categories, ContentOffset } from '../../atoms'
import { PopularMoviesProps } from '../../../libs/types/organisms'
import { Container, MoviesList, MovieCard, Overlay } from './styles'

const PopularMovies: React.FC<PopularMoviesProps> = ({ data }) => {
  const router = useRouter()

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
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            imagePath={movie.poster_path}
            onClick={() => handleGetDetail(movie.id)}
          >
            <Overlay>
              <Categories>{truncateString(movie.formattedGenres, 35)}</Categories>
              <Classification classification={movie.vote_average} starsSize={1.2} />
            </Overlay>
          </MovieCard>
        ))}
        <ContentOffset />
      </MoviesList>
    </Container>
  )
}

export default PopularMovies
