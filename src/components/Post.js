import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(false);

  return (
    <PostContainer key={post.id}>
      <PictureContainer>
        <img src={post.pictureURL} alt="" />
        <IconContext.Provider value={{ className: "react-icons" }}>
          <button like={like} onClick={() => setLike(!like)}>
            {!like ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart style={{ color: "#AC0000" }} />
            )}
          </button>
        </IconContext.Provider>
      </PictureContainer>
      <ContentContainer>
        <Link to={`/user/${post.userId}`}>
          <p className="username">{post.username}</p>
        </Link>
        <p className="description">{post.description}</p>
        <SnippetContainer
          onClick={() => window.open(post.url, "_blank").focus()}
        >
          <InfoContainer>
            <p className="title">{post.urlTitle}</p>
            <p className="url-description">{post.urlDescription}</p>
            <a
              href={post.url}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {post.url}
            </a>
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

  @media (max-width: 613px) {
    border-radius: 0;
  }
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 50px;
    border-radius: 50%;
  }

  button {
    margin-top: 12px;
    background-color: #171717;
    color: #ffffff;
    border: none;
    font-size: 20px;
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

    @media (max-width: 613px) {
      font-size: 17px;
      line-height: 20px;
    }
  }
  p.description {
    font-weight: 400;
    font-size: 17px;
    color: #b7b7b7;
    margin-bottom: 10px;

    @media (max-width: 613px) {
      font-size: 15px;
      line-height: 18px;
    }
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
    margin-bottom: 5px;
    color: #cecece;

    @media (max-width: 613px) {
      font-size: 11px;
      line-height: 13px;
    }
  }
  p.url-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9b9595;
    margin-bottom: 8px;

    @media (max-width: 613px) {
      font-size: 9px;
      line-height: 11px;
    }
  }
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #cecece;
    text-decoration: none;

    @media (max-width: 613px) {
      font-size: 9px;
      line-height: 11px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  border-radius: 0px 12px 13px 0px;
  background-image: url(${(props) => props.urlImage});
  background-position: center;
  background-size: cover;
  margin-left: 7px;
`;
