import axios from "axios";
//usamos o axios para criar uma referencia ao endpoint da API/SERVICE (chamada de baseURL) e
//configuramos também o uso da API Key

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, apiKey };
