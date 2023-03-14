import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import commentIcon from "../../assets/comment-icon.svg";
import { PostStyled } from "./PostStyled";

export default function Post({post}) {
  return (
    <>
    <PostStyled>
      <section className="container-post">
        <h6>Enviado por: {post.creator.name}</h6>
        <p>
          {post.content}
        </p>
      </section>
      <section className="container-icons">
        <div>
          <img src={arrowUp} alt="" />
          <h6>{post.like}</h6>
          <img src={arrowDown} alt="" />
          <h6>{post.dislike}</h6>
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
