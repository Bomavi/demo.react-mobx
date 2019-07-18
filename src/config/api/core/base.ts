import { ApiClient } from './api-client';

export class Base {
	public API: ApiClient;

	public constructor(apiClient: ApiClient) {
		this.API = apiClient;
	}
}
