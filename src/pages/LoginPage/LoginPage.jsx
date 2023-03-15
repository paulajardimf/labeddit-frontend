import axios from "axios";
import { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import { LoginPageStyled } from "./LoginPageStyled";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToPostsPage, goToSignupPage } from "../../routes/coordinator";

export default function LoginPage() {
  const { context, page, setPage } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async () => {
    try {
      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/login`, body);

      window.localStorage.setItem("labeddit-token", response.data.token);
      const token = window.localStorage.getItem("labeddit-token");

      context.setIsAuth(true);

      goToPostsPage(navigate, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginPageStyled>
        <section>
          <img src={logo} alt="" />
          <h1>LabEddit</h1>
          <h5>O projeto de rede social da Labenu</h5>
        </section>
        <section>
          <input
            type="email"
            value={form.email}
            onChange={onChangeForm}
            name="email"
            placeholder="E-mail"
            autoComplete="off"
          />
          <input
            type="password"
            value={form.password}
            onChange={onChangeForm}
            name="password"
            placeholder="Senha"
            autoComplete="off"
          />
        </section>
        <section>
          <button className="button-color" onClick={login}>
            Continuar
          </button>
          <hr />
          <button
            onClick={() => {
              goToSignupPage(navigate);
              setPage("signupPage");
            }}
          >
            Crie uma conta!
          </button>
        </section>
      </LoginPageStyled>
    </>
  );
}
