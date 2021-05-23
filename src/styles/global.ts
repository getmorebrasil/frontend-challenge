import { createGlobalStyle, css } from 'styled-components';
 
export const centerFlexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const scrollBarStyle = css`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  scrollbar-width: thin;
  scrollbar-color: blue transparent;

  &::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutralColor};
    border-radius: 10px;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 8px;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: 580px) {
    html {
      font-size: 14px;
    }
  }

  body {
    min-width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.colors.background};
    font-family: "Poppins", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    ${scrollBarStyle};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  body,
  input,
  textarea,
  li,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
 
export default GlobalStyle;
