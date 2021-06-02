import Head from 'next/head'
import { Container } from './styles'
import { Loading, Unauthorized } from '../../molecules'
import { IWithSSGAuthProps } from '../../../libs/interfaces/molecules'

const WithSSGAuth: React.FC<IWithSSGAuthProps> = ({
  children,
  pageTitle,
  isLoading,
  isFallback,
  metaContent,
  isAuthenticated,
}) => {
  return (
    <>
      {isFallback || isLoading ? (
        <>
          <Head>
            <title>Carregando...</title>
            <meta name="carregando" content="O Conteúdo está carregando..." />
          </Head>
          <Container>
            <Loading />
          </Container>
        </>
      ) : (
        <Container>
          <>
            {isAuthenticated ? (
              <>
                <Head>
                  <title>{pageTitle}</title>
                  <meta name="description" content={metaContent} />
                </Head>
                {children}
              </>
            ) : (
              <Unauthorized />
            )}
          </>
        </Container>
      )}
    </>
  )
}

export default WithSSGAuth
