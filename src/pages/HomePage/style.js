import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #333333;
  padding-top: 3%;
`;

const Main = styled.div`
  color: #ffffff;
  height: 100%;
  width: 45%;

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 38px;
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
`;

const PictureContainer = styled.div`
  img {
    height: 50px;
    border-radius: 50%;
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
  }
  input {
    background: #efefef;
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    margin-bottom: 8px;
    padding-left: 12px;
  }
  input#description {
    height: 80px;
  }
  input::placeholder {
    font-size: 16px;
    vertical-align: text-top;
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

export { Main, Container, NewPostContainer, PictureContainer, InputsContainer };
