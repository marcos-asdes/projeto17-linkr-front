import styled from "styled-components";

export default function Post({ post }) {
  return (
    <PostContainer>
      <PictureContainer>
        <img src={post.pictureURL} alt="" />
      </PictureContainer>
      <ContentContainer>
        <p className="username">{post.username}</p>
        <p className="description">{post.description}</p>
        <SnippetContainer>
          <InfoContainer>
            <p className="title">{post.urlTitle}</p>
            <p className="url-description">{post.urlDescription}</p>
            <a href={post.url}>{post.url}</a>
          </InfoContainer>
          <ImageContainer>
            <img src={post.urlImage} alt={post.url} />
          </ImageContainer>
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
`;

const SnippetContainer = styled.div`
  width: 100%;
  heigth: 10px;
  display: flex;
  flex-direction: row;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
`;

const InfoContainer = styled.div`
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
  width: 40%;
  height: 100%;
  img {
    width: 100%;
    border-radius: 0px 12px 13px 0px;
  }
`;
