import { Base } from 'config/axios/base';

export class UsersApi extends Base {
  public getById = async (id: string): Promise<UserType> => {
    return await this.apiClient.get<UserType>(`/users/${id}`);
  };

  public update = async (
    id: string,
    userData: UserUpdateSchema
  ): Promise<UserType> => {
    return await this.apiClient.put<UserType>(`/users/${id}`, userData);
  };
}
