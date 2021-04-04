import { Base } from 'config/axios/base';

export class AuthService extends Base {
  public authenticate = async (): Promise<UserType> => {
    return await this.apiClient.post<UserType>('/authenticate');
  };

  public login = async (params: Partial<LoginType>): Promise<UserType> => {
    return await this.apiClient.post<UserType>('/login', params);
  };

  public register = async (
    params: Partial<RegisterType>
  ): Promise<UserType> => {
    return await this.apiClient.post<UserType>('/register', params);
  };

  public logout = async (): Promise<string> => {
    return await this.apiClient.post<string>('/logout');
  };
}
