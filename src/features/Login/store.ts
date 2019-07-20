/* npm imports: common */
import { observable, computed } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

export class AuthStore extends BaseStore {
	@observable public user: any = null;

	@computed public get isAuthenticated() {
		return this.user;
	}
}

export const authStore = new AuthStore();
