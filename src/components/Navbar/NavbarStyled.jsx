import styled from "styled-components";

export const NavbarStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: #ededed;
    width: 100vw;
    height: 50px;
    display: flex;
    position: absolute;
    top: 0;
    align-items: center;
  }

  img {
    width: 28px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    color: #4088CB;
    font-weight: 500;
  }
`;
