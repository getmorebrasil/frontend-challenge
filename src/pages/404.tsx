import Head from 'next/head'
import styled from 'styled-components'
import { ICONS } from '../constants'
import { centerFlexContainer, blockContainer } from '../styles/shared'

const Container = styled.main`
  ${centerFlexContainer};
`

const TimesIcon = styled(ICONS.AI.AiOutlineClose)`
  color: ${({ theme }) => theme.colors.primary};
`

export const Block = styled.section`
  ${blockContainer};
`

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
