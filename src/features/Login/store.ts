/* npm imports: common */
import { observable, computed, action } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

export class AuthStore extends BaseStore {
	@observable public user: any = null;

	@computed public get isAuthenticated() {
		return this.user;
	}

	@action public login = async ({ isGuest = false }: any) => {
		const res = await this.services.auth.login({ isGuest: true });
		console.warn(res);
	};

	@action public register = async () => {
		const res = await this.services.auth.register({});
		console.warn(res);
	};

	@action public logout = async () => {
		const res = await this.services.auth.logout();
		console.warn(res);
	};

	@action public test = async () => {
		const res = await this.api.tasks.test();
		console.warn(res);
	};
}

export const authStore = new AuthStore();
