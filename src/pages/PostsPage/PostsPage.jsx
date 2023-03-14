import Post from "../../components/Post/Post";
import { PostsPageStyled } from "./PostsPageStyled";
import Navbar from "../../components/Navbar/Navbar";

export default function PostsPage() {
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
          <Post />
          <Post />
          <Post />
        </section>
      </PostsPageStyled>
    </>
  );
}
