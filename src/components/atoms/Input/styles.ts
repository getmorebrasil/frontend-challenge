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
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > input {
    width: inherit;
    height: 4rem;
    padding: 0.8rem;
    margin-top: 0.6rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-color: ${({ isFilled, theme }) => isFilled && theme.colors.primary};
    border-color: ${({ isFocused, theme }) => isFocused && theme.colors.primary};
    border-color: ${({ withError, theme }) => withError && theme.colors.error};
  }

  & > em {
    display: block;
    width: inherit;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.error};
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
    font-style: unset;
  }
`
