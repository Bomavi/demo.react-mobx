import { Base } from './core/base';
import { queryString } from 'utils/helpers';

export class TasksApi extends Base {
	public async search(params: Partial<TaskSearchType>) {
		return await this.API.get<{ content: TaskType[] }>(`/tasks/search${queryString(params)}`);
	}

	public async getById(id: string) {
		return await this.API.get<TaskType>(`/files/${id}`);
	}

	public async update(id: string, task: TaskType) {
		return await this.API.post(`/tasks/${id}`, task);
	}
}
