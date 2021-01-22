import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b65b18e993a0b6c22592d6a2caf2e6c4",
        language: "ko-KR",
    },
});

api.get("tv/popular");

export default api;
