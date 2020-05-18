import axios from "axios";

export const fetchFavorites = (userId) => {
  return axios.get(`/api/favorites/${userId}`)
};

export const createFavorite = (data) => {
  return axios.post("/api/favorites/new", data)
};

export const removeFavorite = (favoriteId) => {
  return axios.delete(`/api/favorites/${favoriteId}`)
};