import axios from "axios";

const baseUrl = `https://api.github.com/`;

const apiMovies = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
});

export default apiMovies;
