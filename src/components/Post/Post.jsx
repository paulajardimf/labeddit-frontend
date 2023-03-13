import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import commentIcon from "../../assets/comment-icon.svg";
import { PostStyled } from "./PostStyled";

export default function Post() {
  return (
    <>
    <PostStyled>
      <section className="container-post">
        <h6>Enviado por: Paulitcha</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis labore facere quas aliquam cumque excepturi, eveniet
          officia deserunt nesciunt a, doloremque, quis ipsum error odio id.
          Error, animi suscipit?
        </p>
      </section>
      <section className="container-icons">
        <div>
          <img src={arrowUp} alt="" />
          <h6>0</h6>
          <img src={arrowDown} alt="" />
          <h6>0</h6>
        </div>
        <div>
          <img src={commentIcon} alt="" />
          <h6>0</h6>
        </div>
      </section>
      </PostStyled>
    </>
  );
}
