import axiosBase, { AxiosError, AxiosRequestConfig } from 'axios';

export const axios = axiosBase.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
