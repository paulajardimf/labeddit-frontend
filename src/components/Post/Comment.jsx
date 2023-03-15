import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import commentIcon from "../../assets/comment-icon.svg";
import { PostStyled } from "./PostStyled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCommentsPage } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";

export default function Comment({comment}) {
  const { context, posts, setPosts, fetchPosts, fetchComments, comments, setComments, page, setPage } = useContext(GlobalContext);

  const params = useParams();

  const navigate = useNavigate();

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
      console.log(error);
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
      console.log(error);
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
