import axiosBase, { AxiosRequestConfig, AxiosError } from 'axios';

export const axios = axiosBase.create({
	// baseURL: process.env.API_BASE_PREFIX,
	headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// do something
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);
