import { ApiClient } from './core/api-client';
import { TasksApi } from './tasks';

export class Api {
	public API: ApiClient;
	public TASKS: TasksApi;

	public constructor(apiPrefix: string) {
		if (!apiPrefix) {
			throw new Error('[apiPrefix] required');
		}

		this.API = new ApiClient({ apiPrefix });
		this.TASKS = new TasksApi(this.API);
	}
}
