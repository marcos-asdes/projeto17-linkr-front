import styled from "styled-components";

export default function Post() {
  return (
    <PostContainer>
      <PictureContainer>
        <img
          src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          alt="profile-pic"
        />
      </PictureContainer>
      <ContentContainer>
        <p className="username">Nome do usuário</p>
        <p className="description">Textinho que é opcional</p>
        <SnippetContainer>
          <InfoContainer>
            <p className="title">Título do link</p>
            <p className="url-description">
              Descrição do link lalalala lalalalaa lalalalalalalala lalalal lala
              la lalala lalalala
            </p>
            <a href="https://www.google.com">https://www.google.com</a>
          </InfoContainer>
          <ImageContainer>
            <img
              src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
              alt="https://www.google.com"
            />
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
