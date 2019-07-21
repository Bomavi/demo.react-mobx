/* root imports: common */
import { Base } from 'config/axios/base';
import { queryString } from 'utils/helpers';

export class TasksApi extends Base {
	public async search(params: Partial<TaskSearchType>) {
		return await this.apiClient.get<{ content: TaskType[] }>(
			`/tasks/search${queryString(params)}`
		);
	}

	public async getById(id: string) {
		return await this.apiClient.get<TaskType>(`/tasks/${id}`);
	}

	public async update(id: string, task: TaskType) {
		return await this.apiClient.post(`/tasks/${id}`, task);
	}

	public async test() {
		return await this.apiClient.post(`/validate/user`, {
			credentials: { username: '1111', password: '2222' },
		});
	}
}
