import axios from 'axios';

export const fetchPurchases = () => {
  return axios.get('api/purchases')
};

export const createPurchase = data => {
  return axios.post('api/purchases', data)
};

export const removePurchase = purchaseId => {
  return axios.delete(`api/purchases/${purchaseId}`)
};