import styled from "styled-components";

export const LoginPageStyled = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 5px;
  }

  input {
    height: 3.75rem;
    width: 22.688rem;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    padding-left: 10px;
    margin-bottom: 0.2rem;
    color: #373737;
  }

  button {
    height: 3.188rem;
    width: 22.688rem;
    border-radius: 27px;
    background-color: #fff;
    border: 1px solid #fe7e02;
    color: #fe7e02;
    margin: 1.5rem 0 1.5rem 0;
  }

  button:active {
    background-color: #fe7e02;
    color: #fff;
  }

  .button-color {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255, 100, 137);
    background: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );
    color: #fff;
    border: none;
  }

  .button-color:active {
    background-color: #fff;
    color: #fe7e02;
  }

  hr {
    width: 22.688rem;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );
  }

  .loading {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #fe7e02;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
