import axios from 'axios';

export const fetchBobaItems = () => {
    return axios.get('/api/bobaitems')
};

export const fetchBobaItem = (bobaItemId) => {
    return axios.get(`/api/bobaitems/${bobaItemId}`)
};

export const createBobaItem = (data) => {
    return axios.post(`/api/bobaitems`, data)
};