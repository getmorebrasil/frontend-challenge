import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { withSSGAuth } from '../utils'
import { truncateString } from '../helpers'
import { Button } from '../components/atoms'
import { Header, Footer } from '../components/molecules'
import { PopularMovies, MoreMovies, WithSSGAuth } from '../components/organisms'
import getShowCaseMovie from '../services/movies/showCase'
import listPopulars from '../services/movies/populars'
import listMovies from '../services/movies/list'
import { IShowCaseIMovie } from '../libs/interfaces/contexts'
import { useAuth } from '../hooks'
import { Container, ShowCase, Title, LeftSide } from '../styles/pages/home'
import { IHomeProps } from '../libs/interfaces/pages'

export default function Home({ formattedShowCase, populars, movies }: IHomeProps) {
  const router = useRouter()
  const { loading, setLoading, isAuthenticated, setIsAuthenticated } = useAuth()

  useEffect(() => {
    withSSGAuth({ setLoading, setIsAuthenticated })
  }, [setIsAuthenticated, setLoading])

  const handleWatchNow = useCallback(() => {
    router.push('/watching')
  }, [router])

  return (
    <WithSSGAuth
      isLoading={loading}
      isFallback={router.isFallback}
      pageTitle="Início | getmovies"
      isAuthenticated={isAuthenticated}
      metaContent="getmovies o melhor portal informativo sobre filmes do Brasil"
    >
      <Container>
        <Header />
        <ShowCase imagePath={formattedShowCase.backdrop_path}>
          <LeftSide>
            <Title>{formattedShowCase.title}</Title>
            <h3>Sinopse</h3>
            <h4>{formattedShowCase.overview}</h4>
          </LeftSide>

          <Button text="Watch Now" handleAction={handleWatchNow} />
        </ShowCase>

        <PopularMovies data={populars} />

        <MoreMovies data={movies} />
        <Footer />
      </Container>
    </WithSSGAuth>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: showCase } = await getShowCaseMovie()
  const { data: populars } = await listPopulars()
  const { data: movies } = await listMovies()

  let formattedShowCase = {} as IShowCaseIMovie

  if (showCase) {
    formattedShowCase = {
      ...showCase,
      title: truncateString(showCase.title, 30),
      overview: truncateString(showCase.overview, 204),
    }
  }

  return {
    props: { formattedShowCase, populars, movies },
    revalidate: 60 * 60 * 24,
  }
}
