import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import { PostStyled } from "./PostStyled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";

export default function Comment({comment}) {
  const { fetchComments } = useContext(GlobalContext);

  const params = useParams();

  const likeComment = async (commentId) => {
    try {
      let body = {
        like: true,
      };
      await axios.put(`${BASE_URL}/posts/comment/${commentId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchComments(params.id);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const dislikeComment = async (commentId) => {
    try {
      let body = {
        like: false,
      };
      await axios.put(`${BASE_URL}/posts/comment/${commentId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchComments(params.id);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };


  return (
    <>
      <PostStyled>
        <section className="container-post">
          <h6>Comentário enviado por: {comment.creatorName}</h6>
          <p>{comment.content}</p>
        </section>
        <section className="container-icons">
          <div>
            <img src={arrowUp} alt="like" onClick={() => likeComment(comment.id)} />
            <h6>{comment.likes}</h6>
            <img
              src={arrowDown}
              alt="dislike"
              onClick={() => dislikeComment(comment.id)}
            />
            <h6>{comment.dislikes}</h6>
          </div>
        </section>
      </PostStyled>
    </>
  );
}
