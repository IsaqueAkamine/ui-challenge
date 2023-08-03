import axios from "axios";

const baseUrl = `https://moviesdatabase.p.rapidapi.com`;

const apiMovies = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.EXPO_PUBLIC_RAPIDAPI_HOST,
  },
  timeout: 10000,
});

export default apiMovies;
