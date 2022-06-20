import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import { getPostsByHashtag } from "../services/api";
import Trending from "../components/Trending";
import TokenContext from "../contexts/TokenContext";

export default function HashtagPage() {
  const { token } = useContext(TokenContext);
  const { word } = useParams();
  const [posts, setPosts] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  async function renderPosts(word) {
    const response = await getPostsByHashtag(word, token);
    console.log(response);
    setPosts(response.data);
    setSearchedWord(word);
  }
  if (word !== searchedWord) {
    renderPosts(word);
  }
  return (
    <>
      <Header />
      <Container>
        <Main>
          <h2>#{word}</h2>
          <div className="pageOrganizer">
            <section>
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </section>
            <Trending />
          </div>
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #333333;
  padding-top: 3%;
`;

const Main = styled.div`
  color: #ffffff;
  height: 100%;
  width: 45%;
  .pageOrganizer {
    display: flex;
  }
  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 38px;
  }
`;
