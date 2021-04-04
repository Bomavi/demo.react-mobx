import { Base } from 'config/axios/base';

import { TasksApi } from './tasks';
import { UsersApi } from './users';

export class ApiService extends Base {
  public readonly tasks: TasksApi = new TasksApi(this.apiClient);
  public readonly users: UsersApi = new UsersApi(this.apiClient);
}
