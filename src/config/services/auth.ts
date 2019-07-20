/* root imports: common */
import { Base } from 'config/axios/base';

export class AuthService extends Base {
	public async login(params: Partial<LoginType>) {
		return await this.apiClient.post<{ content: any }>('/login', params);
	}

	public async register(params: Partial<LoginType>) {
		return await this.apiClient.post<{ content: any }>('/register', params);
	}

	public async logout() {
		return await this.apiClient.post<{ content: any }>('/logout');
	}
}
