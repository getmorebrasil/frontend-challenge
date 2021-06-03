import styled from 'styled-components'

export const Container = styled.div<{ size?: number }>`
  display: flex;
  gap: 0.4rem;

  & img {
    width: ${({ size }) => (size ? `${size}rem` : '3rem')};
    height: ${({ size }) => (size ? `${size}rem` : '3rem')};
  }
`
