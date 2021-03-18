import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    min-width: 320px;
    font-family: 'Roboto', Arial, sans-serif;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
  }
`;

export default GlobalStyle;
