import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}/product`);
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${base_url}/product/${id}`);
  return response.data;
};

export const productService = { getProductById, getProducts };
