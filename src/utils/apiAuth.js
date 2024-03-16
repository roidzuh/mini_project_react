import axios from "axios";

export const handleLogin = async (API, payload) => {
  const res = await axios.post(API, payload);
  return res;
};

export const handleRegister = async (API, payload) => {
  const res = await axios.post(API, payload);
  return res;
};

export const handleCreateUser = async (API, payload) => {
  const res = await axios.post(API, payload);
  return res;
};

export const handleGetUsers = async (API, pagination) => {
  const res = await axios.get(`${API}?page=${pagination}`);
  return res;
};

export const handleGetUserDetail = async (API, id) => {
  const res = await axios.get(`${API}/${id}`);
  return res;
};
