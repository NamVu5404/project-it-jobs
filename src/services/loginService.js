import { post } from "../utils/request";

export const checkLogin = async (email, password) => {
  const response = await fetch(
    `http://localhost:3002/company?email=${email}&password=${password}`
  );
  const result = await response.json();
  return result;
};

export const createAccount = async (option) => {
  const result = await post(`company`, option);
  return result;
};

export const checkEmail = async (email) => {
  const response = await fetch(`http://localhost:3002/company?email=${email}`);
  const result = await response.json();
  return result;
};

export const checkPhone = async (phone) => {
  const response = await fetch(`http://localhost:3002/company?phone=${phone}`);
  const result = await response.json();
  return result;
};
