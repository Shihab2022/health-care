/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";
import qs from "qs";
import { getToken } from "../utils/authentication";
import { SOMETHING_WENT_WRONG } from "../constants/common";

type ApiHandlerOptions<T = any> = {
  baseURL?: string;
  params?: T; // Generic type for params
  path: string;
  formData?: boolean;
  axiosMethod: Method; // From axios types
  imageBuffer?: ArrayBuffer | Blob | File | null;
};

type ApiResponse<T = any> = {
  data?: T;
  success: boolean;
  error?: string;
  params?: any;
  status?: number;
  message?: string;
};

export const apiHandler = async <T = any>({
  baseURL =  import.meta.env.VITE_API_ENDPOINT as string,
  params = {} as T, // Default empty object with generic type
  path,
  formData = false,
  axiosMethod,
  imageBuffer = null,
}: ApiHandlerOptions<T>): Promise<ApiResponse<T>> => {
  let parsedPath = baseURL + path;

  // Handle GET requests with params
  if (axiosMethod === "get" && params && Object.keys(params).length > 0) {
    parsedPath = `${parsedPath}?${qs.stringify(params)}`;
  }

  // Handle image upload case
  if (imageBuffer) {
    try {
      const res = await axios.post(`${parsedPath}?email=${(params as any)?.email}`, imageBuffer, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return {
        data: res.data,
        success: res?.data?.success !== false,
        error: res?.data?.error,
        params,
      };
    } catch (err) {
      const error = err as any;
      const e = error.toJSON?.() || {};
      if (e.status === 401) {
        window.location.href = "/login";
        throw error; // Re-throw to stop further execution
      }
      return {
        status: e.status,
        message: error?.response?.data?.message || "SOMETHING_WENT_WRONG",
        success: false,
        params,
      };
    }
  }

  // Prepare options for non-image requests
  const options: AxiosRequestConfig = {
    headers: {
      "Content-Type": formData ? "multipart/form-data" : "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    method: axiosMethod,
    url: parsedPath,
  };

  // Add data/params based on method
  if (axiosMethod !== "get") {
    options.data = formData ? params : JSON.stringify(params);
  } else if (params && Object.keys(params).length > 0) {
    options.params = params;
  }

  try {
    const res = await axios(options);
    return {
      data: res.data,
      success: res?.data?.success !== false,
      error: res?.data?.error,
      params,
    };
  } catch (err) {
    const error = err as any;
    const e = error.toJSON?.() || {};
    if (e.status === 401) {
      window.location.href = "/login";
      throw error;
    }
    return {
      status: e.status,
      message: error?.response?.data?.message || SOMETHING_WENT_WRONG,
      success: false,
      params,
    };
  }
};