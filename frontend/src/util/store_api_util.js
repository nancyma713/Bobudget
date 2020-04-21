import axios from 'axios';

export const fetchStores = () => {
    return axios.get('/api/stores')
};

export const fetchStore = (storeId) => {
    return axios.get(`/api/stores/${storeId}`)
};