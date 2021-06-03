import { css } from 'styled-components'

export const centerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const centerFlexContainer = css`
  min-height: 100vh;
  ${centerFlex};
`

export const backgroundImageStyle = css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
`

export const authContent = css`
  flex-direction: column;

  & p {
    margin-top: 2rem;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    cursor: pointer;

    & > span {
      margin-left: 6px;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`

export const blockContainer = css`
  display: flex;
  flex: 1;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  max-width: 580px;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.contrastColor};
  margin: 8px;
  padding: 4rem;

  & > h1 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin-top: 1rem;
  }

  & > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin: 1rem 0 2rem 0;
  }
`

export const scrollBarStyle = css`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  scrollbar-width: thin;
  scrollbar-color: blue transparent;

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutralColor};
    border-radius: 10px;
  }
`
