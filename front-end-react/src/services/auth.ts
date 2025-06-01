/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiHandler } from "./instances";


export const registerUserApi = async (params: any) => {

  const res = await apiHandler({
    baseURL:  import.meta.env.VITE_API_ENDPOINT,
    path: "user/create-patient",
    axiosMethod: "post",
    formData: false,
    params: params,
  });
  return res;
};

export const loginUserApi = async (params: any) => {

  const res = await apiHandler({
    baseURL:  import.meta.env.VITE_API_ENDPOINT,
    path: "/auth/login",
    axiosMethod: "post",
    formData: false,
    params: params,
  });
  return res;
};