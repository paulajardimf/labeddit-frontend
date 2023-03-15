import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import Comment from "../../components/Post/Comment";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PostsPageStyled } from "../PostsPage/PostsPageStyled";


export default function CommentsPage() {
  const { fetchPosts, posts, fetchComments, comments, setComments } = useContext(GlobalContext);

  const [content, setContent] = useState("");
  const params = useParams();

  useEffect(() => {
    fetchPosts()
  }, []);

  const post = posts.find((post) => post.id === params.id);

  useEffect(() => {
    fetchComments(params.id)
  }, [comments]);

  const createComment = async (postId) => {
    try {
      const body = {
        content: content,
      };
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.post(
        `${BASE_URL}/posts/comment/${postId}`,
        body,
        config
      );
      setComments(response.data);
      fetchComments(params.id)
      setContent("");
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Navbar/>
      <PostsPageStyled>
        <section className="container-input">
          <Post post={post}/>
          <div className="input">
            <input
              type="text"
              placeholder="Escreva seu comentário..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit" onClick={() => createComment(params.id)}>
            Postar
          </button>
        </section>
        <hr />
        <section className="container-posts">
          {Array.isArray(comments) && comments
            .map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
        </section>
      </PostsPageStyled>
    </>
  )
}
