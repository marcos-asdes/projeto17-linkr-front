import Header from "../../components/Header";
import { Main, Container } from "./style";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <h2>timeline</h2>
          {/* <NewPost />
        <Posts /> */}
        </Main>
      </Container>
    </>
  );
};

export default HomePage;
