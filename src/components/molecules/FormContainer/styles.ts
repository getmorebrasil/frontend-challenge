import { Form } from '@unform/web'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 580px;
  min-height: 30rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.contrastColor};
  margin: 8px;
  padding: 0 4rem 4rem;
`

export const FormChildren = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  & > a {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2rem;
  }
`
