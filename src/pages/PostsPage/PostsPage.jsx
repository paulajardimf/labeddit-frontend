import Post from "../../components/Post/Post";
import { PostsPageStyled } from "./PostsPageStyled";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToLoginPage } from "../../routes/coordinator";

export default function PostsPage() {
  const {context, posts, setPosts, fetchPosts} = useContext(GlobalContext);

  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");
    if (token) {
      context.setIsAuth(true);
    } else {
      goToLoginPage(navigate);
    }
  }, [context]);


  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
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
        `${BASE_URL}/posts/create`,
        body,
        config
      );
      setPosts(response.data);
      fetchPosts();
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <>
      <Navbar />
      <PostsPageStyled>
        <section className="container-input">
          <div className="input">
            <input
              type="text"
              placeholder="Escreva seu post..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit" onClick={createPost}>
            Postar
          </button>
        </section>
        <hr />
        <section className="container-posts">
          {posts
            .map((post) => {
              return <Post key={post.id} post={post} />;
            })
            .reverse()}
        </section>
      </PostsPageStyled>
    </>
  );
}
