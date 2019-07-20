/* local imports: common */
import { ApiClient } from './api-client';

export class Base {
	public apiClient: ApiClient;

	public constructor(apiClient: ApiClient) {
		this.apiClient = apiClient;
	}
}
