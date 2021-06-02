import styled from 'styled-components'
import { centerFlex } from '../../../styles/shared'

export const Container = styled.button`
  ${centerFlex};
  justify-content: space-around;

  width: 300px;
  height: 60px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: all 0.4s ease-in-out;

  & > h3 {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
  }

  :hover {
    transform: scale(1.02);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
