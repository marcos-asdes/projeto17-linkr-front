import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Post from "../../components/Post";
import TokenContext from "../../contexts/TokenContext";
import { getUserPosts } from "../../services/api";
import { Main, Container, Message } from "./style";

export default function UserPage() {
  const { token } = useContext(TokenContext);
  return (
    <>
      <Header />
      <Container>
        <Main>
          <UserPosts token={token} />
        </Main>
      </Container>
    </>
  );
}

const UserPosts = ({ token }) => {
  const [userData, setUserData] = useState(null);
  const { id: userId } = useParams();

  useEffect(() => {
    const promise = getUserPosts(userId, token);
    promise.then((res) => setUserData(res.data));
    promise.catch((e) =>
      alert(
        "An error occured while trying to fetch the user's posts, please refresh the page."
      )
    );
  }, [userId]);

  if (!userData) {
    return (
      <section>
        <Message>Loading...</Message>
      </section>
    );
  }

  function formatUserName(username) {
    const lastLetter = username.slice(-1);
    if (lastLetter === "s") {
      return `${username}'`;
    }

    return `${username}'s`;
  }

  const title = `${formatUserName(userData.name)} posts`;

  if (!userData.posts.length) {
    return (
      <>
        <h2>{title}</h2>
        <section>
          <Message>There are no posts yet</Message>
        </section>
      </>
    );
  }

  return (
    <>
      <h2>{title}</h2>
      <section>
        {userData.posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </section>
    </>
  );
};
