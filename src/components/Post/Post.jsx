import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import commentIcon from "../../assets/comment-icon.svg";
import { PostStyled } from "./PostStyled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Post({ post }) {
  const {context, posts, setPosts, fetchPosts} = useContext(GlobalContext);

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
      fetchPosts()
    } catch (error) {
      console.log(error);
    }

  }

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
      fetchPosts()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PostStyled>
        <section className="container-post">
          <h6>Enviado por: {post.creator.name}</h6>
          <p>{post.content}</p>
        </section>
        <section className="container-icons">
          <div>
            <img src={arrowUp} alt="like" onClick={() => likePost(post.id)} />
            <h6>{post.likes}</h6>
            <img src={arrowDown} alt="dislike" onClick={() => dislikePost(post.id)} />
            <h6>{post.dislikes}</h6>
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
