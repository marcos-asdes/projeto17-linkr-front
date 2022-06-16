import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Post from "../../components/Post";
import { getAllPosts, publishPost } from "../../services/api";
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
          <section>{RenderPosts()}</section>
        </Main>
      </Container>
    </>
  );
};

const RenderPosts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (() => {
      const response = getAllPosts();
      response.then((res) => setPosts(res.data));
      response.catch((e) =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page."
        )
      );
    })();
  }, []);

  if (!posts)
    return (
      <span
        style={{
          fontFamily: "Oswald",
          fontSize: "20px",
        }}
      >
        Loading...
      </span>
    );

  if (!posts.length)
    return (
      <span
        style={{
          fontFamily: "Oswald",
          fontSize: "20px",
        }}
      >
        There are no posts yet
      </span>
    );

  return posts.map((post) => <Post post={post} key={post.id} />);
};

const NewPost = () => {
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
      await publishPost({ ...formData });

      isLoading.placeholder = "Publish";
      isLoading.disabled = false;
      setIsLoading({ ...isLoading });

      formData.url = "";
      formData.description = "";
      setFormData({ ...formData });
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
        <img
          src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          alt="profile-pic"
        />
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
