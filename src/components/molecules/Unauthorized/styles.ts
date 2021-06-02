import styled from 'styled-components'
import { ICONS } from '../../../constants'
import { blockContainer, centerFlexContainer } from '../../../styles/shared'

export const Container = styled.main`
  ${centerFlexContainer};
`

export const AuthIcon = styled(ICONS.BI.BiBlock)`
  color: ${({ theme }) => theme.colors.primary};
`

export const Block = styled.section`
  ${blockContainer};

  & > p {
    margin-bottom: 4rem;
  }
`
