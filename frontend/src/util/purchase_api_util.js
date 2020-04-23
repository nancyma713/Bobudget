import axios from 'axios';

export const fetchPurchases = userId => {
  return axios.get(`/api/purchases/${userId}`)
};

export const createPurchase = data => {
  return axios.post('/api/purchases/new', data)
};

export const removePurchase = purchaseId => {
  return axios.delete(`/api/purchases/${purchaseId}`)
};