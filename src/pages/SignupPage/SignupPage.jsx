import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { SignupPageStyled } from "./SignupPageStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export default function SignupPage() {
  const context = useContext(GlobalContext);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (context.context.isAuth) {
      // goToHomePage(navigate);
    }
  }, [context.isAuth, navigate]);

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async () => {
    try {
      setIsLoading(true);

      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/signup`, body);

      window.localStorage.setItem("cookenu-token", response.data.token);

      setIsLoading(false);
      context.context.setIsAuth(true);

      // goToHomePage(navigate);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

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
          <input type="text" placeholder="Nome" name="name" value={form.name} onChange={onChangeForm} />
          <input type="email" placeholder="E-mail" name="email" value={form.email} onChange={onChangeForm} />
          <input type="password" placeholder="Senha" name="password" value={form.password} onChange={onChangeForm} />
        </section>
        <section>
          <section>
            <h6>
              Ao continuar você concorda com o nosso <a>Contrato de usuário</a>{" "}
              e nossa <a>Política de Privacidade</a>
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
          <button className="button-color" onClick={signup}>Cadastrar</button>
        </section>
      </SignupPageStyled>
    </>
  );
}
