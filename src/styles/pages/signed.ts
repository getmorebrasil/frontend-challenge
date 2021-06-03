import styled from 'styled-components'
import { centerFlex } from '../shared'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const WhiteBlock = styled.section`
  flex: 1;
  ${centerFlex};
  justify-content: baseline;
  flex-direction: column;
  max-width: 580px;
  border-radius: 1.5rem;
  margin: 8px;
  padding: 4rem;

  & > h1 {
    font-weight: 400;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin: 1rem 0 4rem 0;
  }
`

export const CompleteImage = styled.img`
  max-width: 5rem;
  margin-bottom: 1.8rem;
`
