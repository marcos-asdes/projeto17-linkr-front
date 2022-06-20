import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5009", // AQUI VAI ENTRAR O LINK DO DEPLOY DO BACK
});

export const publishPost = async (formData) => {
  await api.post("/posts", formData, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};

export const getAllPosts = async () => {
  return api.get("/posts", {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};

export const getPostsByHashtag = async (word) => {
  return api.get(`/hashtag/${word}`, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};
  
export const getUsersByName = async (userFilter) => {
  const lowerUserFilter = userFilter.toLowerCase();
  const route = `/users?name=${lowerUserFilter}`;
  return api.get(route, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};

export const getTrandings = async () => {
  return api.get(`/hashtag`, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};
    
export const getUserPosts = async (userId) => {
  const route = `/users/${userId}`;
  return api.get(route, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};

export const likePost = async (formData) => {
  await api.post("/likes", formData, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};

export const dislikePost = async (formData) => {
  await api.patch("/likes", formData, {
    headers: {
      Authorization: `Bearer 634fdb5a-04f8-44db-9b04-b61d90099b62`,
    },
  });
};
