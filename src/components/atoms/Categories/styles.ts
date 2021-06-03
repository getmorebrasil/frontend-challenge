import styled from 'styled-components'

export const Container = styled.strong<{ fontSize?: number }>`
  color: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: ${({ fontSize }) => fontSize || 0.8}rem;
`
