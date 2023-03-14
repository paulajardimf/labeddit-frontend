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
  const context = useContext(GlobalContext);
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!context.isAuth) {
  //     goToLoginPage(navigate)
  //   }
  // }, [])

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.get(`${BASE_URL}/posts`, config);
      setPosts(response.data);
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data?.message)
    }
  };

  return (
    <>
      <Navbar />
      <PostsPageStyled>
        <section className="container-input">
          <div className="input">
            <input type="text" placeholder="Escreva seu post..." />
          </div>
          <button type="submit">Postar</button>
        </section>
        <hr />
        <section className="container-posts">
          {posts.map((post) => {
            return <Post key={post.id} post={post}/>;
          })}
        </section>
      </PostsPageStyled>
    </>
  );
}
