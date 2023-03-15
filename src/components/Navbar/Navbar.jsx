import { useContext } from "react";
import logo from "../../assets/logo.svg";
import { GlobalContext } from "../../contexts/GlobalContext";
import { NavbarStyled } from "./NavbarStyled";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export default function Navbar() {
  const {context, page, setPage} = useContext(GlobalContext);

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
            <img src={logo} alt="" />
            {context.isAuth && <a className="logout" onClick={logout} >Logout</a>}
            {!context.isAuth && <a className="login" onClick={() => goToLoginPage(navigate)} >Entrar</a>}
            
          </div>
      </NavbarStyled>
    </>
  )
}
