
import axios from "axios";

 const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "20a3e4ba31d8741c31934c354a8c5816",
    languages: "pt-BR",
    page: 1,
  },
});

export default api;