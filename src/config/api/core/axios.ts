import axiosBase, { AxiosRequestConfig, AxiosError } from 'axios';

export const axios = axiosBase.create({
	// baseURL: process.env.REACT_APP_API_BASE,
	headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// do something
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);
