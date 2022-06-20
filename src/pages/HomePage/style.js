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
    }
  }
`;

const NewPostContainer = styled.div`
  padding: 12px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  margin: 40px 0 20px 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 613px) {
    border-radius: 0;
  }
`;

const PictureContainer = styled.div`
  img {
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 613px) {
    display: none;
  }
`;

const InputsContainer = styled.div`
  width: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  span {
    width: 100%;
    font-family: "Lato";
    font-weight: 300;
    font-size: 25px;
    line-height: 40px;
    color: #707070;

    @media (max-width: 613px) {
      font-weight: 300;
      font-size: 17px;
      line-height: 20px;
      text-align: center;

      padding-bottom: 10px;
    }
  }
  input {
    background: #efefef;
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    margin-bottom: 8px;
    padding-left: 12px;

    @media (max-width: 613px) {
      font-size: 13px;
      line-height: 16px;
    }
  }
  input#description {
    height: 80px;
  }
  input::placeholder {
    font-size: 16px;
    vertical-align: text-top;
    @media (max-width: 613px) {
      font-size: 13px;
      line-height: 16px;
    }
  }
  input:focus {
    outline: none;
  }
  button {
    height: 30px;
    width: 100px;
    float: right;
    color: #ffffff;
    background: #1877f2;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    border: none;
    border-radius: 5px;
  }
`;

const Message = styled.span`
  font-family: "Oswald";
  font-size: 30px;

  @media (max-width: 613px) {
    font-size: 20px;
  }
`;

export {
  Main,
  Container,
  NewPostContainer,
  PictureContainer,
  InputsContainer,
  Message,
};
