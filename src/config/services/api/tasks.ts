import { Base } from 'config/axios/base';
import { queryString } from 'utils/helpers';

export class TasksApi extends Base {
  public search = async (
    params: Partial<TasksSearchType>
  ): Promise<TaskType[]> => {
    return await this.apiClient.get<TaskType[]>(
      `/tasks/search${queryString(params)}`
    );
  };

  public create = async (task: TaskUpdateSchema): Promise<TaskType> => {
    return await this.apiClient.post<TaskType>('/tasks', task);
  };

  public update = async (
    id: string,
    task: TaskUpdateSchema
  ): Promise<TaskType> => {
    return await this.apiClient.put<TaskType>(`/tasks/${id}`, task);
  };

  public delete = async (id: string): Promise<TaskType> => {
    return await this.apiClient.delete<TaskType>(`/tasks/${id}`);
  };
}
