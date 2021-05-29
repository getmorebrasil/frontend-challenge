import styled from 'styled-components'
import { centerFlex } from '../../../styles/global'

export const Container = styled.summary`
  ${centerFlex};
  justify-content: space-between;

  margin-top: 1rem;

  & p {
    font-family: 'Montserrat';
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.border};
    margin-top: 0.8rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    margin-top: -1rem;

    & p {
      margin-bottom: 1rem;
    }
  }
`
