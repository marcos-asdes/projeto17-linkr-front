import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #333333;
  padding-top: 3%;

  @media (max-width: 613px) {
    padding-top: 20%;
  }
`;

const Main = styled.div`
  color: #ffffff;
  height: 100%;
  width: 45%;
  max-width: 611px;

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 38px;
    margin-bottom: 40px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 613px) {
    width: 100%;

    h2 {
      margin-left: 12px;
      font-size: 33px;
      margin-bottom: 20px;
    }
  }
`;

const Message = styled.span`
    font-family: "Oswald";
    font-size: 30px;

    @media (max-width: 613px) {
      font-size: 20px;
    }
`;


export { Main, Container, Message };
