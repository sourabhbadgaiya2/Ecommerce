import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}/user/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}/user/login`, userData);
  return response.data;
};

export const authService = { register, login };
