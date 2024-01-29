import { post } from "../utils/request";

export const postFormApply = async (option) => {
  const result = await post(`cv`, option);
  return result;
};
