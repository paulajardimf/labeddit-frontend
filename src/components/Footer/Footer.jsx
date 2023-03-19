import { FooterStyled } from "./FooterStyled";
import linkedin from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";

export default function Footer({page}) {
  return (
    <>
      <FooterStyled page={page}>
        <div>
          <h4>Paula Jardim 2023</h4>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/paulajardimf/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/paulajardimf" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
      </FooterStyled>
    </>
  );
}
