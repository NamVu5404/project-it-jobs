import { del, patch, post } from "../utils/request";

export const editInfoCompany = async (id, option) => {
  const result = await patch(`company/${id}`, option);
  return result;
};

export const editInfoJob = async (id, option) => {
  const result = await patch(`jobs/${id}`, option);
  return result;
};

export const deleteJob = async (id) => {
  const result = await del(`jobs/${id}`);
  return result;
}

export const createJob = async (option) => {
  const result = await post(`jobs`, option);
  return result;
}

export const editStatusReadCv = async (id, option) => {
  const result = await patch(`cv/${id}`, option);
  return result;
}

export const deleteCv = async (id) => {
  const result = await del(`cv/${id}`);
  return result;
}