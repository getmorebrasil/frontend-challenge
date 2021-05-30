import styled from 'styled-components'
import { ICONS } from '../constants'
import { centerFlexContainer } from '../styles/global'

const Container = styled.main`
  ${centerFlexContainer};
`

const TimesIcon = styled(ICONS.AI.AiOutlineClose)`
  color: ${({ theme }) => theme.colors.primary};
`

export const Block = styled.section`
  display: flex;
  flex: 1;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  max-width: 580px;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.contrastColor};
  margin: 8px;
  padding: 4rem;

  & > h1 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  }

  & > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin: 1rem 0 2rem 0;
  }
`

export default function Page404() {
  return (
    <Container>
      <Block>
        <TimesIcon size={140} />
        <h1>No Route Match!</h1>
        <p>You are trying to access a route that does not exists...</p>
      </Block>
    </Container>
  )
}
