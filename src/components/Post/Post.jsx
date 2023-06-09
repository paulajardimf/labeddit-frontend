import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import commentIcon from "../../assets/comment-icon.svg";
import { PostStyled } from "./PostStyled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCommentsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const { fetchPosts, setPage } = useContext(GlobalContext);
  const [comment, setComment] = useState([]);

  const navigate = useNavigate();

  const likePost = async (postId) => {
    try {
      let body = {
        like: true,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchPosts();
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const dislikePost = async (postId) => {
    try {
      let body = {
        like: false,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchPosts();
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.get(
        `${BASE_URL}/posts/comment/${postId}`,
        config
      );
      setComment(response.data);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  useEffect(() => {
    fetchComments(post.id);
  }, []);

  return (
    <>
      <PostStyled>
        <section className="container-post">
          <h6>Enviado por: {post?.creator?.name}</h6>
          <p>{post.content}</p>
        </section>
        <section className="container-icons">
          <div>
            <img src={arrowUp} alt="like" onClick={() => likePost(post.id)} />
            <h6>{post.likes}</h6>
            <img
              src={arrowDown}
              alt="dislike"
              onClick={() => dislikePost(post.id)}
            />
            <h6>{post.dislikes}</h6>
          </div>
          <div onClick={()=> {
            goToCommentsPage(navigate, post.id)
            setPage("commentPage")
          }}>
            <img src={commentIcon} alt="" />
            <h6>{comment.length}</h6>
          </div>
        </section>
      </PostStyled>
    </>
  );
}
