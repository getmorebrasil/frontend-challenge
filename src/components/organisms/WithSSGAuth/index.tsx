import Head from 'next/head'
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
          <main>
            <Loading />
          </main>
        </>
      ) : (
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
      )}
    </>
  )
}

export default WithSSGAuth
