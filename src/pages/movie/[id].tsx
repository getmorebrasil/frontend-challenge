import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button, Categories } from '../../components/atoms'
import { Classification, Header, Footer, Loading } from '../../components/molecules'
import { StarringRoles } from '../../components/organisms'
import { useMovie } from '../../hooks'
import { IMovie } from '../../libs/interfaces/contexts'
import { truncateString } from '../../helpers'

const Container = styled.main`
  min-height: calc(100vh - 60px);
  color: ${({ theme }) => theme.colors.secondary};

  & > footer {
    margin-top: 5rem;
  }
`

const ShowCase = styled.section`
  display: flex;
  justify-content: space-between;
  text-align: right;

  width: 100%;
  height: 50rem;
  margin-bottom: 18rem;
  background: #333;
  padding: 5rem 5rem 0;
  background: ${({ theme }) => theme.colors.contrastColor};

  @media (max-width: 1280px) {
    margin-bottom: 15rem;
  }

  @media (max-width: 1100px) {
    margin-bottom: 22rem;
  }

  @media (max-width: 960px) {
    margin-bottom: 12rem;
  }

  @media (max-width: 860px) {
    height: 47rem;
    margin-bottom: 7rem;
  }
`

const MoviePoster = styled.img`
  display: block;
  max-width: 394px;
  margin-top: -5rem;
  border-radius: 0 0 10px 10px;

  @media (max-width: 1280px) {
    max-width: 370px;
  }

  @media (max-width: 1100px) {
    max-width: 340px;
    margin-right: 2rem;
  }

  @media (max-width: 960px) {
    max-width: 280px;
  }

  @media (max-width: 860px) {
    display: none;
  }
`

const RightSide = styled.aside`
  & > h3 {
    display: inline-block;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 300;
    background: ${({ theme }) => theme.colors.background};
    margin-top: 2.8rem;

    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 1280px) {
      font-size: 1.2rem;
    }

    @media (max-width: 720px) {
      font-size: 0.8rem;
    }

    @media (max-width: 580px) {
      display: none;
    }
  }

  & > h4 {
    max-width: 700px;
    font-weight: 400;
    margin-top: 4rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.border};

    @media (max-width: 1280px) {
      font-size: 1.2rem;
      max-width: 600px;
    }

    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

  & > button {
    margin-top: 16rem;
    margin-left: auto;
    border-color: ${({ theme }) => theme.colors.secondary};

    & > h3 {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 1280px) {
      margin-top: 6rem;
    }
  }
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 720px) {
    font-size: 2rem;
  }
`

const MainInfo = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: flex-end;
    gap: 4rem;
    margin-top: 2rem;

    @media (max-width: 720px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  & strong {
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

  & summary {
    & > p {
      margin-right: 1.4rem;

      @media (max-width: 680px) {
        display: none;
      }
    }

    @media (max-width: 680px) {
      margin-top: 1.4rem;
    }
  }
`

export default function Movie() {
  const { getMovie } = useMovie()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState<IMovie>({} as IMovie)

  useEffect(() => {
    async function loadMovie(): Promise<void> {
      const { id } = router.query

      const { data } = await getMovie(Number(id))

      if (data) setMovie(data)

      setLoading(false)
    }

    loadMovie()
  }, [getMovie, router.query])

  const handleWatchNow = useCallback(() => {
    router.push('/watching')
  }, [router])

  return (
    <>
      {!loading && (
        <Head>
          <title>Detalhes | {movie.title}</title>
          <meta name="description" content={movie.overview} />
        </Head>
      )}

      <Container>
        <Header withBackAction />

        {loading ? (
          <Loading />
        ) : (
          <>
            <ShowCase>
              <section>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`Poster do Filme: ${movie.title}`}
                />
              </section>

              <RightSide>
                <Title>{truncateString(movie.title, 38)}</Title>
                <MainInfo>
                  <div>
                    <Categories fontSize={1.6}>
                      {truncateString(movie.formattedGenres, 32)}
                    </Categories>

                    <Classification classification={8.7} />
                  </div>
                </MainInfo>

                <h3>
                  Director <span>{movie.directorName ? movie.directorName : 'Não encontrado'}</span>{' '}
                  | Language{' '}
                  <span>
                    {movie.original_language ? movie.original_language : 'Não encontrado'}
                  </span>{' '}
                  | Status <span>{movie.status}</span> | Released at{' '}
                  <span>{movie.release_date}</span>
                </h3>

                <h4>{truncateString(movie.overview, 344)}</h4>

                <Button text="Watch Now" handleAction={handleWatchNow} />
              </RightSide>
            </ShowCase>

            {movie.credits && <StarringRoles data={movie.credits.cast} />}
            <Footer />
          </>
        )}
      </Container>
    </>
  )
}
