import { useContext, useEffect, useState } from "react";
import { goToPostsPage } from "../../routes/coordinator";
import { SignupPageStyled } from "./SignupPageStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function SignupPage() {
  const context = useContext(GlobalContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (context.context.isAuth) {
      goToPostsPage(navigate);
    }
  }, []);

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async () => {
    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/signup`, body);

      window.localStorage.setItem("labeddit-token", response.data.token);

      context.context.setIsAuth(true);

      goToPostsPage(navigate);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  return (
    <>
      <Navbar />
      <SignupPageStyled>
        <section>
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
        </section>
        <section className="container-inputs">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={onChangeForm}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={onChangeForm}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={onChangeForm}
          />
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
          <button className="button-color" onClick={signup}>
            Cadastrar
          </button>
        </section>
      </SignupPageStyled>
      <Footer/>
    </>
  );
}
