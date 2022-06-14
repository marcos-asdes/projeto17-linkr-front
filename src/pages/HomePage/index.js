import Header from "../../components/Header";
import {
  Main,
  Container,
  NewPostContainer,
  PictureContainer,
  InputsContainer,
} from "./style";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <h2>timeline</h2>
          <NewPost />
          {/* <Posts /> */}
        </Main>
      </Container>
    </>
  );
};

const NewPost = () => {
  return (
    <NewPostContainer>
      <PictureContainer>
        <img
          src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          alt="profile-pic"
        />
      </PictureContainer>
      <InputsContainer>
        <span>What are you going to share today?</span>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="http://..."
          required
        ></input>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Awesome article about #javascript"
          required
        ></input>
      </InputsContainer>
    </NewPostContainer>
  );
};

export default HomePage;
