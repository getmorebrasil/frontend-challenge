import Head from 'next/head'
import { Container, TimesIcon, Block } from '../styles/pages/404'

export default function Page404() {
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
        </Block>
      </Container>
    </>
  )
}
