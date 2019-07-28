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

	@computed public get isAuthenticated() {
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

	@action public switchTheme = async () => {
		try {
			this.user!.setSwitchThemeState(true);
			const themeType = await this.update({ theme: this.themeNameToSwitch });
			if (typeof themeType !== 'string') throw Error('theme switch failed');
			this.changeSelectedThemeType(themeType);
		} catch (e) {
			console.error(e);
		}
	};

	@action private changeSelectedThemeType = (themeType: MUIThemeType) => {
		this.selectedThemeType = themeType;
		localStorage.setItem('theme', themeType);
	};

	@action public setInProgress = (state: boolean) => {
		this.inProgress = state;
	};

	@action private setUser = (user: UserType) => {
		this.user = new UserModel(user);
		this.changeSelectedThemeType(user.theme);
	};

	@action private unsetUser = () => {
		this.user = null;
	};

	@action private updateUser = (user: UserType) => {
		this.user = new UserModel(user);
	};

	@action private initialize = () => {
		this.isInitialized = true;

		const localThemeType = localStorage.getItem('theme');

		if (localThemeType && (localThemeType === 'light' || localThemeType === 'dark')) {
			this.selectedThemeType = localThemeType;
		} else {
			localStorage.setItem('theme', this.selectedThemeType);
		}
	};

	public authenticate = async () => {
		try {
			const user = await this.services.auth.authenticate();

			if (!user) throw Error('authentication failed');

			this.setUser(user);
			this.initialize();
		} catch (e) {
			console.error(e);
			this.initialize();
			this.router.navigate('login');
		}
	};

	public login = async (userData: LoginType) => {
		try {
			this.setInProgress(true);
			const user = await this.services.auth.login(userData);

			if (!user) throw Error('login failed');

			this.setUser(user);
			this.router.navigate('home');
		} catch (e) {
			console.error(e);
		} finally {
			this.setInProgress(false);
		}
	};

	public register = async (userData: RegisterType) => {
		try {
			this.setInProgress(true);
			const user = await this.services.auth.register(userData);

			if (!user) throw Error('registration failed');

			this.setUser(user);
			this.router.navigate('home');
		} catch (e) {
			console.error(e);
		} finally {
			this.setInProgress(false);
		}
	};

	public logout = async () => {
		try {
			this.setInProgress(true);
			const res = await this.services.auth.logout();

			if (!res) throw Error('logout failed');

			this.unsetUser();
			this.router.navigate('login');
		} catch (e) {
			console.error(e);
		} finally {
			this.setInProgress(false);
		}
	};

	public update = async (userData: UserUpdateSchema): Promise<MUIThemeType | boolean> => {
		try {
			if (!this.user) throw Error('no user found');

			const { id } = this.user;
			const user = await this.services.api.users.update(id, userData);

			if (!user) throw Error('no user returned');

			this.updateUser(user);
			return user.theme;
		} catch (e) {
			return false;
		}
	};
}

export const authStore = new AuthStore();
