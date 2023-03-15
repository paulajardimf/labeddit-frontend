import styled from "styled-components";

export const PostsPageStyled = styled.div`
  padding: 0 25px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;
