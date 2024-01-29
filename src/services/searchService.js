import { get } from "../utils/request"

export const getListCity = async () => {
  const result = await get(`city`);
  return result;
}

export const getListTags = async () => {
  const result = await get(`tags`);
  return result;
}

export const getListJob = async () => {
  const result = await get(`jobs`);
  return result;
}

export const getListCompany = async () => {
  const result = await get(`company`);
  return result;
}

export const getListCv = async () => {
  const result = await get(`cv`);
  return result;
}