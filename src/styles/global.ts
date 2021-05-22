import { createGlobalStyle, css } from 'styled-components';
 
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
      font-size: 90%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 80%;
    }
  }

  @media (max-width: 580px) {
    html {
      font-size: 70%;
    }
  }

  body {
    min-width: 100%;
    min-height: 100vh;
    background: ${props => props.theme.colors.background};
    font-family: "Poppins", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
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

export const centerFlexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
 
export default GlobalStyle;
