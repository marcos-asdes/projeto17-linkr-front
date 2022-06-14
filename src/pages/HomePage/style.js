import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #333333;
  padding-top: 5%;
`;

const Main = styled.div`
  color: #ffffff;
  height: 100vh;
  width: 60%;

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 38px;
  }
`;

export { Main, Container };
