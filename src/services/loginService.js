import { get, post } from "../utils/request";

export const checkLogin = async (email, password) => {
  const result = await get(`company?email=${email}&password=${password}`);
  return result;
};

export const createAccount = async (option) => {
  const result = await post(`company`, option);
  return result;
};

export const checkExits = async (key, value) => {
  const result = await get(`company?${key}=${value}`);
  return result;
};
