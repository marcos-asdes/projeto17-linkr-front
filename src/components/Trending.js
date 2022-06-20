import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrandings } from "../services/api";
import TokenContext from "../contexts/TokenContext";
export default function Trending() {
  const { token } = useContext(TokenContext);
  const [trendingList, setTrendingList] = useState([]);
  function renderTrendings(item) {
    return (
      <Link to={`/hashtag/${item.name}`}>
        <p>#{item.name}</p>
      </Link>
    );
  }
  useEffect(() => {
    (async () => {
      const response = await getTrandings(token);
      console.log(response);
      setTrendingList(response.data);
    })();
  }, []);
  return (
    <Container>
      <h3>trending</h3>
      <div className="barrinhaTrending"></div>
      {trendingList?.map(renderTrendings)}
    </Container>
  );
}
const Container = styled.div`
  width: 301px;
  height: 406px;
  color: white;
  margin: 72px 0 0 18px;
  background: #171717;
  border-radius: 16px;
  h3 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 25px;
    margin-left: 15px;
    margin-top: 15px;
  }

  .barrinhaTrending {
    height: 1px;
    width: 100%;
    background-color: #484848;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  p {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 12px;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 613px) {
    display: none;
  }
`;
