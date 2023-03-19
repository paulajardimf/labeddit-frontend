import styled from "styled-components";

export const PostsPageStyled = styled.div`
  padding: 0 25px;
  margin-top: 35px;
  display: flex;
  min-height: 87vh;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  .container-input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    .input {
      background-color: #e0e0e0;
      min-height: 131px;
      width: 22.438rem;
      margin: 10px 0;
      border-radius: 12px;
      border: none;
      input{
        margin: 20px;
        background-color: #e0e0e0;
        border: none;
        font-size: 1.125rem;
      }
      input:focus {
        outline: none;
      }
    }
    button {
      height: 3.188rem;
      width: 22.438rem;
      border-radius: 12px;
      background: rgb(255, 100, 137);
      background: linear-gradient(
        90deg,
        rgba(255, 100, 137, 1) 0%,
        rgba(249, 178, 78, 1) 100%
      );
      color: #fff;
      border: none;
    }
    button:active {
    background-color: #fff;
    color: #fe7e02;
  }
  }

  hr {
    width: 22.438rem;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );
    margin: 25px 0;
  }

  .container-posts {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 22.438rem;
  }

  .loading {
    position: relative;
    left: 50%;
    right: 50%;
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
