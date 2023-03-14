import logo from "../../assets/logo.svg";
import { NavbarStyled } from "./NavbarStyled";

export default function Navbar() {
  return (
    <>
      <NavbarStyled>
          <div>
            <img src={logo} alt="" />
            <a className="login">Entrar</a>
          </div>
      </NavbarStyled>
    </>
  )
}
