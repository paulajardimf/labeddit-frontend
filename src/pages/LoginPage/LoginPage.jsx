import logo from "../../assets/logo.svg";
import { LoginPageStyled } from "./LoginPageStyled";

export default function LoginPage() {
  return (
    <>
      <LoginPageStyled>
        <section>
          <img src={logo} alt="" />
          <h1>LabEddit</h1>
          <h5>O projeto de rede social da Labenu</h5>
        </section>
        <section>
          <input type="email" name="" id="" placeholder="E-mail"/>
          <input type="password" name="" id="" placeholder="Senha"/>
        </section>
        <section>
          <button className="button-color">Continuar</button>
          <hr />
          <button>Crie uma conta!</button>
        </section>
      </LoginPageStyled>
    </>
  );
}
