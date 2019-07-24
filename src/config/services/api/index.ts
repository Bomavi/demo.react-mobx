/* root imports: common */
import { Base } from 'config/axios/base';

/* local imports: common */
import { TasksApi } from './tasks';

export class ApiService extends Base {
	public tasks: TasksApi = new TasksApi(this.apiClient);
}
