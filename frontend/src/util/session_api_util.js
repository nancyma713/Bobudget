import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
}

export const fetchUser = () => {
    return axios.get('/api/users/current');
}

export const updateUser = (userData) => {
    return axios.put(`/api/users/${userData._id}/update`, userData);
}