import styled from 'styled-components'
import { authContent, backgroundImageStyle, centerFlex } from '../shared'

export const Container = styled.main`
  ${centerFlex};
  ${backgroundImageStyle};

  padding: 3rem;
  min-height: 100vh;
  background: url('/background.jpg') rgba(0, 0, 0, 0.9);
`

export const Content = styled.section`
  ${centerFlex};
  ${authContent};
`
