import axios from "axios";

export const fetchBobaItems = () => {
  return axios.get("/api/bobas/");
};

export const fetchBobaItem = (bobaItemId) => {
  return axios.get(`/api/bobas/${bobaItemId}`);
};

export const createBobaItem = (data) => {
  return axios.post("/api/bobas", data);
};

export const searchBobas = (bobaName) => {
  return axios.get(`/api/bobas/search/${bobaName}`);
};
