import styled from 'styled-components'
import { centerFlex } from '../../../styles/shared'

export const Container = styled.div<{ size?: number }>`
  ${centerFlex};

  width: 100%;
  height: 100%;
  padding: 3rem;
`
