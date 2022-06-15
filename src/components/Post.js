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
        <p>Textinho que é opcional</p>
      </ContentContainer>
    </PostContainer>
  );
}

const PostContainer = styled.div``;

const PictureContainer = styled.div``;

const ContentContainer = styled.div``;
