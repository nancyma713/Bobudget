import axios from 'axios';

export const createFavorite = data => {
  return axios.post('/api/favorites/new', data)
};