import logo from "../../assets/logo.svg";
import { SignupPageStyled } from "./SignupPageStyled";

export default function SignupPage() {
  return (
    <>
      <SignupPageStyled>
        <section>
          <div>
            <img src={logo} alt="" />
            <a className="login">Entrar</a>
          </div>
        </section>
        <section>
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
        </section>
        <section className="container-inputs">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
        </section>
        <section>
          <section>
            <h6>
              Ao continuar você concorda com o nosso <a>Contrato de usuário</a> e nossa <a>Política de Privacidade</a>
            </h6>
            <section className="container">
              <input type="checkbox" name="" id="termo" />
              <label htmlFor="termo">
                <h6>
                  Eu concordo em receber emails sobre coisas legais no LabEddit
                </h6>
              </label>
            </section>
          </section>
          <button className="button-color">Cadastrar</button>
        </section>
      </SignupPageStyled>
    </>
  );
}
