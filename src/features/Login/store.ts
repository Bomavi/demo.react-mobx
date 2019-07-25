/* npm imports: common */
import { observable, computed, action } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';
import { RouterHelper } from 'config/router';
import { UserModel } from 'features/Login/user.model';

export class AuthStore extends BaseStore {
	private router = new RouterHelper();

	@observable public user: UserModel | null = null;
	@observable public isInitialized: boolean = false;

	@computed public get isAuthenticated() {
		return !!this.user;
	}

	@action private setUser = (user: UserType) => {
		this.user = new UserModel(user);
	};

	@action private unsetUser = () => {
		this.user = null;
	};

	@action private initialize = () => {
		this.isInitialized = true;
	};

	public authenticate = async () => {
		try {
			const user = await this.services.auth.authenticate();

			if (!user) throw Error('authentication failed');

			this.setUser(user);
			this.initialize();
		} catch (e) {
			console.error(e);
			this.router.navigate('login');
		}
	};

	public login = async (userData: LoginType) => {
		try {
			const user = await this.services.auth.login(userData);

			if (!user) throw Error('login failed');

			this.setUser(user);
			this.router.navigate('home');
		} catch (e) {
			console.error(e);
		}
	};

	public register = async (userData: RegisterType) => {
		try {
			const user = await this.services.auth.register(userData);

			if (!user) throw Error('registration failed');

			this.setUser(user);
			this.router.navigate('home');
		} catch (e) {
			console.error(e);
		}
	};

	public logout = async () => {
		const res = await this.services.auth.logout();

		if (res) {
			this.unsetUser();
			this.router.navigate('login');
		}
	};

	public test = async () => {
		try {
			const res = await this.services.api.tasks.search({});
			console.warn(res);
		} catch (e) {
			console.error(e);
		}
	};
}

export const authStore = new AuthStore();
