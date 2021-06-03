import { useCallback, memo, useMemo, useRef, useEffect, useState, MutableRefObject } from 'react'
import { useRouter } from 'next/router'
import { truncateString } from '../../../helpers'
import { MoreMoviesProps } from '../../../libs/types/organisms'
import { Button, Categories } from '../../atoms'
import { Classification, Loading } from '../../molecules'
import { Container, Movie, MoviePoster, CenterContent, RightSide } from './styles'
import listMovies from '../../../services/movies/list'

const MoreMovies: React.FC<MoreMoviesProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(2)
  const loadMoreRef = useRef<HTMLDivElement>()
  const [movies, setMovies] = useState(data)
  const router = useRouter()

  const handleRequest = useCallback(async () => {
    const { data: moreMovies } = await listMovies(currentPage)

    if (moreMovies) setMovies((old) => [...old, ...moreMovies])
  }, [currentPage])

  useEffect(() => {
    handleRequest()
  }, [currentPage, handleRequest])

  useEffect(() => {
    const options = { root: null, rootMargin: '20px', threshold: 1.0 }

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0]

      if (target.isIntersecting) setCurrentPage((old) => old + 1)
    }, options)

    if (loadMoreRef.current) observer.observe(loadMoreRef.current)
  }, [])

  const formattedMovies = useMemo(() => {
    const result = movies.map((movie) => {
      return {
        ...movie,
        title: truncateString(movie.title, 30),
        overview: truncateString(movie.overview, 250),
        formattedGenres: truncateString(movie.formattedGenres, 24),
      }
    })

    return result
  }, [movies])

  return (
    <Container>
      <h2>More Movies</h2>

      {formattedMovies.map((movie) => (
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

            <Button text="Get Details" handleAction={() => router.push(`/movie/${movie.id}`)} />

            {movie.directorName && (
              <h5>
                Director <span>{movie.directorName}</span>
              </h5>
            )}
          </RightSide>
        </Movie>
      ))}

      <div ref={loadMoreRef as MutableRefObject<HTMLDivElement>}>
        <Loading size={40} />
      </div>
    </Container>
  )
}

export default memo(MoreMovies, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})
