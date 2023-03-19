import styled from "styled-components";

export const FooterStyled = styled.header`
  position: ${(props) => (props.page === "PostsPage" || props.page === "CommentsPage" ? "relative" : "fixed")};
  bottom: 0;
  margin-top: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ededed;
  width: 100%;
  height: 50px;

  h4 {
    color: #828282;
  }

  img{
    height: 35px;
  }

`;
