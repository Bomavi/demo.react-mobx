/* local imports: common */
import { axios } from './axios';

export class ApiClient {
	private prefix: string;

	public constructor({ apiPrefix }: { apiPrefix: string }) {
		if (!apiPrefix) {
			throw new Error('[apiPrefix] required');
		}

		this.prefix = apiPrefix;
	}

	public get<E>(url: string, params?: {}, options?: {}): Promise<E> {
		return this.request({
			url,
			params,
			options,
			method: 'get',
		}) as Promise<E>;
	}

	public put(url: string, body?: {}, params: {} = {}, options?: {}): Promise<{}> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'put',
		});
	}

	public patch<E>(url: string, body: {} = {}): Promise<E> {
		return this.request({
			url,
			body,
			method: 'patch',
		}) as Promise<E>;
	}

	public post<E = {}>(url: string, body?: {}, params: {} = {}, options?: {}): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'post',
		}) as Promise<E>;
	}

	public delete(url: string, params: {} = {}): Promise<{}> {
		return this.request({
			url,
			params,
			method: 'delete',
		});
	}

	public async request({
		url,
		method,
		params,
		body,
		options,
	}: {
		url: string;
		method: 'delete' | 'get' | 'patch' | 'post' | 'put';
		params?: {};
		body?: {};
		options?: {};
	}): Promise<{}> {
		return axios({
			method,
			url,
			params,
			baseURL: this.prefix,
			data: body,
			headers: { 'content-type': 'application/json' },
			withCredentials: true,
			...(options || {}),
		})
			.then((response: any) => {
				return response.data;
			})
			.catch((error: any) => {
				const res = error.response;
				if (!res) {
					console.error(error);
					throw new Error(error);
				}
				if (res.status >= 400) {
					const serverError = new Error(error) as CustomServerError;

					serverError.res = res;

					throw serverError;
				}
			});
	}
}
