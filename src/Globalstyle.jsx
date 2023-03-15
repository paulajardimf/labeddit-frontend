import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  
  #root {
    max-width: 428px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    color: #373737;
  }

  h5 {
    font-size: 1rem;
    font-weight: 300;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 300;
  }

  a {
    color: #4088CB;
    font-weight: 500;
  }
`;
