import { useContext } from "react";
import logo from "../../assets/logo.svg";
import x from "../../assets/x.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { NavbarStyled } from "./NavbarStyled";
import { useNavigate } from "react-router-dom";
import {
  goToCommentsPage,
  goToLoginPage,
  goToPostsPage,
} from "../../routes/coordinator";

export default function Navbar() {
  const { context, page, setPage } = useContext(GlobalContext);

  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("labeddit-token");
    context.setIsAuth(false);
    goToLoginPage(navigate);
  }

  return (
    <>
      <NavbarStyled>
        <div>
          {page === "commentPage" && (
            <img
              src={x}
              alt="close"
              className="close"
              onClick={() => {
                goToPostsPage(navigate);
                setPage("");
              }}
            />
          )}
          <img src={logo} alt="" />
          {context.isAuth && (
            <a
              className="logout"
              alt="logout"
              onClick={() => {
                logout();
                setPage("");
              }}
            >
              Logout
            </a>
          )}
          {!context.isAuth && (
            <a
              className="login"
              alt="login"
              onClick={() => goToLoginPage(navigate)}
            >
              Entrar
            </a>
          )}
        </div>
      </NavbarStyled>
    </>
  );
}
