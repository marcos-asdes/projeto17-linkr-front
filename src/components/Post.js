import styled from "styled-components";
import {Link} from 'react-router-dom'
import { useEffect } from "react";
export default function Post({ post }) {
  function readHashtags(word){
      if(word[0]==='#')return(<Link to={`/hashtag/${word.replace('#', '')}`}><span className="hashtag">{word}</span></Link>)
      else return(<span>{word}</span>)
  }
  const newList=[]
  const oldList=post.description.split(' ')
  for(let k=0;k<oldList.length;k++){
    newList.push(oldList[k])
    if(k!=oldList.length-1){newList.push(' ')}
  }
  return (
    <PostContainer>
      <PictureContainer>
        <img src={post.pictureURL} alt="" />
      </PictureContainer>
      <ContentContainer>
        <p className="username">{post.username}</p>
        <p className="description">{newList.map(readHashtags)}</p>
        <SnippetContainer
          onClick={() => window.open(post.url, "_blank").focus()}
        >
          <InfoContainer>
            <p className="title">{post.urlTitle}</p>
            <p className="url-description">{post.urlDescription}</p>
            <a href={post.url}>{post.url}</a>
          </InfoContainer>
          <ImageContainer urlImage={post.urlImage}></ImageContainer>
        </SnippetContainer>
      </ContentContainer>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  padding: 12px;
  width: 100%;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  margin: 12px 0 10px 0;
`;

const PictureContainer = styled.div`
  img {
    height: 50px;
    border-radius: 50%;
  }
`;

const ContentContainer = styled.div`
  font-family: "Lato";
  width: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;

  p.username {
    font-weight: 400;
    font-size: 19px;
    color: #ffffff;
    margin-bottom: 8px;
  }
  p.description {
    font-weight: 400;
    font-size: 17px;
    color: #b7b7b7;
    margin-bottom: 10px;
  }
  .hashtag{
    font-weight:900
  }
`;

const SnippetContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 10px 0 8px 10px;
  p.title {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #cecece;
  }
  p.url-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9b9595;
    margin-bottom: 8px;
  }
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #cecece;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  border-radius: 0px 12px 13px 0px;
  background-image: url(${(props) => props.urlImage});
  background-position: center;
  background-size: cover;
`;
