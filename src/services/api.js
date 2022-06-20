import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000", // AQUI VAI ENTRAR O LINK DO DEPLOY DO BACK
});

export const publishPost = async (formData, token) => {
  await api.post("/posts", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllPosts = async (token) => {
  return api.get("/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPostsByHashtag = async (word, token) => {
  return api.get(`/hashtag/${word}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUsersByName = async (userFilter, token) => {
  const lowerUserFilter = userFilter.toLowerCase();
  const route = `/users?name=${lowerUserFilter}`;
  return api.get(route, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTrandings = async (token) => {
  return api.get(`/hashtag`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserPosts = async (userId, token) => {
  const route = `/users/${userId}`;
  return api.get(route, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const likePost = async (formData, token) => {
  await api.post("/likes", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const dislikePost = async (formData, token) => {
  await api.patch("/likes", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
