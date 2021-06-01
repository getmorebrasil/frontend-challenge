import { useCallback } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import { truncateString } from '../helpers'
import { Button } from '../components/atoms'
import { Header, Footer, Loading } from '../components/molecules'
import { PopularMovies, MoreMovies } from '../components/organisms'
import { backgroundImageStyle } from '../styles/global'
import getShowCaseMovie from '../services/movie/showCase'
import listPopulars from '../services/movie/populars'
import listMovies from '../services/movie/list'
import { IMovie, IShowCaseIMovie } from '../libs/interfaces/contexts'

const Container = styled.main`
  min-height: calc(100vh - 60px);
  color: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
`

const ShowCase = styled.section<{ imagePath: string }>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 49rem;
  background: #333;
  padding: 5rem 5rem 0;
  position: relative;
  background: ${({ imagePath }) => imagePath && `url(https://image.tmdb.org/t/p/w1280${imagePath})`}
    rgba(0, 0, 0, 0.8);

  ${backgroundImageStyle};

  & > button {
    margin-top: 10rem;
    border-color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};

    & > h3 {
      color: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    }
  }

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;
    flex-direction: column;
    position: unset;

    & > button {
      margin-top: 3rem;
    }
  }
`

const Title = styled.h1`
  font-size: 4.4rem;
  font-weight: 300;

  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 680px) {
    font-size: 1.8rem;
  }
`

const LeftSide = styled.aside`
  max-width: 700px;

  & > h3 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-top: 3rem;
  }

  & > h4 {
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1rem;

    @media only screen and (max-width: 1100px) {
      max-width: 580px;
    }
  }

  @media only screen and (max-width: 900px) {
    & > h3 {
      font-size: 1.7rem;
      margin-top: 2rem;
    }

    & > h4 {
      font-size: 1.4rem;
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 680px) {
    & > h3 {
      font-size: 1.4rem;
      margin-top: 1.8rem;
    }

    & > h4 {
      font-size: 1.2rem;
      margin-top: 1.8rem;
    }
  }
`

interface IHomeProps {
  formattedShowCase: IShowCaseIMovie
  populars: IMovie[]
  movies: IMovie[]
}

export default function Home({ formattedShowCase, populars, movies }: IHomeProps) {
  const router = useRouter()

  const handleWatchNow = useCallback(() => {
    router.push('/watching')
  }, [router])

  return (
    <>
      <Head>
        <title>Início | getmovies</title>
        <meta
          name="description"
          content="getmovies o melhor portal informativo sobre filmes do Brasil"
        />
      </Head>
      <Container>
        <Header />
        {router.isFallback ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </Container>
    </>
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
