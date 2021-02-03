/* local imports: common */
import { axios } from './axios';

export class ApiClient {
	private readonly prefix: string;

	public constructor({ apiPrefix }: { apiPrefix: string }) {
		if (!apiPrefix) {
			throw Error('[apiPrefix] required');
		}

		this.prefix = apiPrefix;
	}

	public get<E = Record<string, any>>(
		url: string,
		params?: Record<string, any>,
		options?: Record<string, any>
	): Promise<E> {
		return this.request({
			url,
			params,
			options,
			method: 'get',
		}) as Promise<E>;
	}

	public put<E = Record<string, any>>(
		url: string,
		body: Record<string, any> = {},
		params?: Record<string, any>,
		options?: Record<string, any>
	): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'put',
		}) as Promise<E>;
	}

	public patch<E = Record<string, any>>(
		url: string,
		body: Record<string, any> = {},
		params?: Record<string, any>,
		options?: Record<string, any>
	): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'patch',
		}) as Promise<E>;
	}

	public post<E = Record<string, any>>(
		url: string,
		body: Record<string, any> = {},
		params?: Record<string, any>,
		options?: Record<string, any>
	): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'post',
		}) as Promise<E>;
	}

	public delete<E = Record<string, any>>(
		url: string,
		params?: Record<string, any>
	): Promise<E> {
		return this.request({
			url,
			params,
			method: 'delete',
		}) as Promise<E>;
	}

	private async request({
		url,
		method,
		body,
		params,
		options,
	}: {
		url: string;
		method: 'delete' | 'get' | 'patch' | 'post' | 'put';
		body?: Record<string, any>;
		params?: Record<string, any>;
		options?: Record<string, any>;
	}): Promise<Record<string, any>> {
		const response = await axios({
			method,
			url,
			params,
			baseURL: this.prefix,
			data: body,
			...options,
		});
		return response.data;
	}
}
