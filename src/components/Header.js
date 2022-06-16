import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from "styled-components";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Container>
      <p>linkr</p>
      <SearchBar />
      <section>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <button>
            <BsChevronDown />
          </button>
        </IconContext.Provider>
        <img
          src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          alt="profile-pic"
        />
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  background: #151515;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Passion One", cursive;
    color: #ffffff;
    font-size: 50px;
    letter-spacing: 0.05em;
  }

  .search{
    @media(max-width: 800px){
      width: 68%;
    }
    @media (max-width: 613px) {
      display: none;
    }
  }

  section {
    button {
      background-color: #151515;
      border: none;
    }
    .react-icons {
      color: #ffffff;
      font-size: 25px;
    }
    img {
      height: 40px;
      border-radius: 50%;
    }
  }
`;
