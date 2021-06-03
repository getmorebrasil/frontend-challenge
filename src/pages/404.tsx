import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '../components/atoms'
import { Container, TimesIcon, Block } from '../styles/pages/404'

export default function Page404() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Não encontrado | Página solicitada não existe</title>
        <meta
          name="description"
          content="Esta página não existe, por favor reconsidere o link acessado."
        />
      </Head>
      <Container>
        <Block>
          <TimesIcon size={140} />
          <h1>No Route Match!</h1>
          <p>You are trying to access a route that does not exists...</p>

          <Button handleAction={() => router.push('/home')} text="Go Home" />
        </Block>
      </Container>
    </>
  )
}
