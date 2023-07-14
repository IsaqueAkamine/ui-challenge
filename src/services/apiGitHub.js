import axios from "axios";

// const baseUrl = `https://api.github.com/users/`;
const baseUrl = `https://api.github.com/`;

const apiGithub = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
});

export default apiGithub;
