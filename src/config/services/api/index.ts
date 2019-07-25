/* root imports: common */
import { Base } from 'config/axios/base';

/* local imports: common */
import { TasksApi } from './tasks';
import { UsersApi } from './users';

export class ApiService extends Base {
	public tasks: TasksApi = new TasksApi(this.apiClient);
	public users: UsersApi = new UsersApi(this.apiClient);
}
