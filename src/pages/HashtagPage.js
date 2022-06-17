import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import Header from "../components/Header";
import Post from "../components/Post";
import { getPostsByHashtag } from "../services/api";
import Trending from '../components/Trending';

export default function HashtagPage(){
    const  {word} = useParams()
    return(
        <>
      <Header />
      <Container>
        <Main>
          <h2>#{word}</h2>
          <section>{RenderPosts(word)}</section>
        </Main>
        <Trending />
      </Container>
    </>
    )
}
const RenderPosts = (word) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      (async () => {
        const response = await getPostsByHashtag(word);
        console.log(response);
        setPosts(response.data);
      })();
    }, []);
  
    if (!posts) return <span>Loading...</span>;
  
    return posts.map((post) => <Post post={post} key={post.id} />);
  };

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

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 38px;
  }
`;