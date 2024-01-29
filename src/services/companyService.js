import { patch } from "../utils/request";

export const editInfoCompany = async (id, option) => {
  const result = await patch(`company/${id}`, option);
  return result;
}