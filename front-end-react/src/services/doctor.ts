/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiHandler } from "./instances";

export const createDoctor = async (params: any) => {

  const res = await apiHandler({
    baseURL:  import.meta.env.VITE_API_ENDPOINT,
    path: "user/create-doctor",
    axiosMethod: "post",
    formData: false,
    params: params,
  });
  return res;
};