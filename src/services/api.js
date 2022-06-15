import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/", // AQUI VAI ENTRAR O LINK DO DEPLOY DO BACK
});

export const publishPost = async (formData) => {
  await api.post("/posts", formData);
};
