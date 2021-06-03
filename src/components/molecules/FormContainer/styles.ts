import { Form } from '@unform/web'
import styled from 'styled-components'
import { centerFlex } from '../../../styles/shared'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 450px;
  min-height: 300px;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.contrastColor};
  margin: 8px;
  padding: 4rem;
  border: 1px solid #ccc;
`

export const FormChildren = styled(Form)`
  ${centerFlex};
  flex-direction: column;

  width: 100%;
  margin-top: 3rem;

  & > img {
    display: block;
    margin: 4rem auto 0 auto;
  }

  & > button {
    margin-top: 4rem;
  }

  & > a {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2rem;
  }
`
