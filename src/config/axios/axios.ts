/* npm imports: common */
import axiosBase, { AxiosRequestConfig, AxiosError } from 'axios';

/* root imports: common */
import { BASE_URL } from 'utils/constants';

export const axios = axiosBase.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
});

axios.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// do something
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);
