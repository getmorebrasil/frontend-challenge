import styled from 'styled-components'
import { ICONS } from '../../constants'
import { centerFlexContainer, blockContainer } from '../../styles/shared'

export const Container = styled.main`
  ${centerFlexContainer};
`

export const TimesIcon = styled(ICONS.AI.AiOutlineClose)`
  color: ${({ theme }) => theme.colors.primary};
`

export const Block = styled.section`
  ${blockContainer};

  & > p {
    margin-bottom: 4rem;
  }
`
