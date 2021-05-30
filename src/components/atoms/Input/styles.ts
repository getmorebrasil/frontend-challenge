import styled from 'styled-components'

interface InputStyleProps {
  withError: boolean
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<InputStyleProps>`
  width: inherit;
  margin-bottom: 1.5rem;
  & > label {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    font-size: 0.9rem;
  }
  & > input {
    width: inherit;
    height: 3.3rem;
    padding: 0.5rem;
    margin-top: 0.6rem;
    border-radius: 1.2rem;
    border: 0.12rem solid ${({ theme }) => theme.colors.constrastColor};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    color: ${({ isFocused, isFilled, theme }) => (isFocused || isFilled) && theme.colors.border};
    border-color: ${({ withError, theme }) => withError && theme.colors.primary};
    border-color: ${({ isFocused, theme }) => isFocused && theme.colors.secondary};
  }
  & > p {
    width: inherit;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 0.6rem;
    margin-bottom: 0.2rem;
  }
`
