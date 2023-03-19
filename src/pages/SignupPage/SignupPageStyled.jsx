import styled from "styled-components";

export const SignupPageStyled = styled.main`
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .login{
    position: absolute;
    right: 50px;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 22.688rem;
    input{
      margin: 0;
      width: 18px;
      height: 18px;
    }
    h6 {
      margin: 10px 0 0 10px ;
    }
  }

  h1{
    position: absolute;
    top: 10%;
    width: 22.688rem;
  }

  h6{
    width: 22.688rem;
  }

  input {
    height: 3.75rem;
    width: 22.688rem;
    border: 1px solid #BDBDBD;
    border-radius: 4px;
    padding-left: 10px;
    margin-bottom: 0.2rem;
    color: #373737;
  }

  .container-inputs {
    margin-top: 20%;
  }

  button {
    height: 3.188rem;
    width: 22.688rem;
    border-radius: 27px;
    background-color: #fff;
    border: 1px solid #FE7E02;
    color: #FE7E02;
    margin: 1.5rem 0 1.5rem 0;
  }
  
  .button-color{
    background: rgb(255,100,137);
    background: linear-gradient(90deg, rgba(255,100,137,1) 0%, rgba(249,178,78,1) 100%);
    color: #fff;
    border: none;
  }

  .button-color:active {
    background-color: #fff;
    color: #fe7e02;
  }
`