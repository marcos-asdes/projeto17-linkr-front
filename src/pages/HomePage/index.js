import { useState, useEffect, useContext } from "react";

import Header from "../../components/Header";
import Post from "../../components/Post";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { getAllPosts, publishPost } from "../../services/api";
import {
  Main,
  Container,
  NewPostContainer,
  PictureContainer,
  InputsContainer,
  Message,
} from "./style";

const HomePage = () => {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <Container>
        <Main>
          <h2>timeline</h2>
          <NewPost token={token} user={user} />
          <section>
            <RenderPosts token={token} />
          </section>
        </Main>
      </Container>
    </>
  );
};

const RenderPosts = ({ token }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (() => {
      const response = getAllPosts(token);
      response.then((res) => setPosts(res.data));
      response.catch((e) =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page."
        )
      );
    })();
  }, []);

  if (!posts) return <Message>Loading...</Message>;

  if (!posts.length) return <Message>There are no posts yet</Message>;

  return posts.map((post, index) => <Post post={post} key={index} />);
};

const NewPost = ({ token, user }) => {
  const [formData, setFormData] = useState({
    url: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState({
    placeholder: "Publish",
    disabled: false,
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    isLoading.placeholder = "Publishing...";
    isLoading.disabled = true;
    setIsLoading({ ...isLoading });

    try {
      await publishPost({ ...formData }, token);

      isLoading.placeholder = "Publish";
      isLoading.disabled = false;
      setIsLoading({ ...isLoading });

      formData.url = "";
      formData.description = "";
      setFormData({ ...formData });

      window.location.reload();
    } catch {
      alert("Houve um erro ao publicar seu link");
      isLoading.placeholder = "Publish";
      isLoading.disabled = false;
      setIsLoading({ ...isLoading });
    }
  };

  return (
    <NewPostContainer>
      <PictureContainer>
        <img src={user.pictureURL} alt="profile-pic" />
      </PictureContainer>
      <InputsContainer>
        <span>What are you going to share today?</span>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            disabled={isLoading.disabled && "disabled"}
            placeholder="http://..."
            required
          ></input>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            disabled={isLoading.disabled && "disabled"}
            placeholder="Awesome article about #javascript"
          ></input>
          <button type="submit" disabled={isLoading.disabled && "disabled"}>
            {isLoading.placeholder}
          </button>
        </form>
      </InputsContainer>
    </NewPostContainer>
  );
};

export default HomePage;
