import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b65b18e993a0b6c22592d6a2caf2e6c4",
        language: "en-US",
    },
});

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos",
            },
        }),
    movieCrew: (id) => api.get(`movie/${id}/credits`),
    search: (term) =>
        api.get("search/movie", {
            params: {
                query: term,
            },
        }),
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvDetail: (id) =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos",
            },
        }),
    tvCrew: (id) => api.get(`tv/${id}/credits`),
    search: (term) =>
        api.get("search/tv", {
            params: {
                query: term,
            },
        }),
};
