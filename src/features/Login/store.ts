/* npm imports: common */
import { observable, computed, action } from 'mobx';

/* npm imports: material-ui/core */
import { Theme } from '@material-ui/core/styles';

/* root imports: common */
import { BaseStore } from 'config/base-store';
import { RouterHelper } from 'config/router';
import { UserModel } from 'features/Login/user.model';
import { lightTheme, darkTheme } from 'utils/themes';

export class AuthStore extends BaseStore {
	private readonly router: RouterHelper = new RouterHelper();

	@observable public user: UserModel | null = null;

	@observable public isInitialized: boolean = false;
	@observable public inProgress: boolean = false;

	@observable public selectedThemeType: MUIThemeType = 'light';

	@computed public get isAuthenticated(): boolean {
		return !!this.user;
	}

	@computed public get themeNameToSwitch(): MUIThemeType {
		switch (this.selectedThemeType) {
			case 'light':
				return 'dark';

			case 'dark':
				return 'light';

			default:
				return 'light';
		}
	}

	@computed public get selectedTheme(): Theme {
		switch (this.selectedThemeType) {
			case 'light':
				return lightTheme;

			case 'dark':
				return darkTheme;

			default:
				return lightTheme;
		}
	}

	@action public changeSelectedThemeType = (themeType: MUIThemeType) => {
		this.selectedThemeType = themeType;
	};

	@action public setInProgress = (state: boolean) => {
		this.inProgress = state;
	};

	@action public setUser = (user: UserType) => {
		this.user = new UserModel(user);
		this.changeSelectedThemeType(user.theme);
	};

	@action private unsetUser = () => {
		this.user = null;
	};

	@action private updateUser = (user: UserType) => {
		this.user = new UserModel(user);
		this.changeSelectedThemeType(user.theme);
	};

	@action private initialize = () => {
		this.isInitialized = true;
	};

	public switchTheme = async () => {
		try {
			if (!this.user) throw new Error('no user found');

			this.user.setSwitchThemeState(true);
			await this.update({ theme: this.themeNameToSwitch });
		} catch (e) {
			if (e === 'Network Error') throw e;
			console.error(e);
		}
	};

	public authenticate = async () => {
		try {
			const user = await this.services.auth.authenticate();

			this.setUser(user);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
			this.router.navigate('login');
		} finally {
			this.initialize();
		}
	};

	public login = async (userData: LoginType) => {
		this.setInProgress(true);

		try {
			const user = await this.services.auth.login(userData);

			this.setUser(user);
			this.router.navigate('home');
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setInProgress(false);
		}
	};

	public register = async (userData: RegisterType) => {
		this.setInProgress(true);

		try {
			const user = await this.services.auth.register(userData);

			this.setUser(user);
			this.router.navigate('home');
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setInProgress(false);
		}
	};

	public logout = async () => {
		this.setInProgress(true);

		try {
			await this.services.auth.logout();

			this.unsetUser();
			this.router.navigate('login');
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setInProgress(false);
		}
	};

	public update = async (userData: UserUpdateSchema) => {
		try {
			if (!this.user) throw new Error('no user found');

			const { id } = this.user;
			const user = await this.services.api.users.update(id, userData);

			this.updateUser(user);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		}
	};
}

export const authStore = new AuthStore();
