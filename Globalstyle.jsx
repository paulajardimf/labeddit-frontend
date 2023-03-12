import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  #root {
    max-width: 1900px;
    margin: 0 auto;
  }
`;
