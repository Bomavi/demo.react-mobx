import { makeAutoObservable } from 'mobx';

import { Theme } from '@material-ui/core/styles';

import { RootStore } from 'config/store';
import { RouterHelper } from 'config/router';
import { UserModel } from 'features/Login/user.model';
import { lightTheme, darkTheme } from 'utils/themes';

export class AuthStore {
	public readonly rootStore: RootStore;
	public readonly router: RouterHelper;

	public user: UserModel | null = null;

	public isInitialized = false;
	public inProgress = false;

	public selectedThemeType: MUIThemeType = 'light';

	constructor(rootStore: RootStore) {
		makeAutoObservable(this, { rootStore: false });

		this.rootStore = rootStore;
		this.router = new RouterHelper();
	}

	public get isAuthenticated(): boolean {
		return !!this.user;
	}

	public get themeNameToSwitch(): MUIThemeType {
		switch (this.selectedThemeType) {
			case 'light':
				return 'dark';

			case 'dark':
				return 'light';

			default:
				return 'light';
		}
	}

	public get selectedTheme(): Theme {
		switch (this.selectedThemeType) {
			case 'light':
				return lightTheme;

			case 'dark':
				return darkTheme;

			default:
				return lightTheme;
		}
	}

	public changeSelectedThemeType(themeType: MUIThemeType): void {
		this.selectedThemeType = themeType;
	}

	public setInProgress(state: boolean): void {
		this.inProgress = state;
	}

	public setUser(user: UserType): void {
		this.user = new UserModel(user);
		this.changeSelectedThemeType(user.theme);
	}

	private unsetUser(): void {
		this.user = null;
	}

	private updateUser(user: UserType): void {
		this.user = new UserModel(user);
		this.changeSelectedThemeType(user.theme);
	}

	private initialize(): void {
		this.isInitialized = true;
	}

	public async switchTheme(): Promise<void> {
		try {
			if (!this.user) throw new Error('no user found');

			this.user.setSwitchThemeState(true);
			await this.update({ theme: this.themeNameToSwitch });
		} catch (e) {
			if (e === 'Network Error') throw e;
			console.error(e);
		}
	}

	public async authenticate(): Promise<void> {
		try {
			const user = await this.rootStore.services.auth.authenticate();

			this.setUser(user);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
			this.router.navigate('login');
		} finally {
			this.initialize();
		}
	}

	public async login(userData: LoginType): Promise<void> {
		this.setInProgress(true);

		try {
			const user = await this.rootStore.services.auth.login(userData);

			this.setUser(user);
			this.router.navigate('home');
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setInProgress(false);
		}
	}

	public async register(userData: RegisterType): Promise<void> {
		this.setInProgress(true);

		try {
			const user = await this.rootStore.services.auth.register(userData);

			this.setUser(user);
			this.router.navigate('home');
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setInProgress(false);
		}
	}

	public async logout(): Promise<void> {
		this.setInProgress(true);

		try {
			await this.rootStore.services.auth.logout();

			this.unsetUser();
			this.router.navigate('login');
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setInProgress(false);
		}
	}

	public async update(userData: UserUpdateSchema): Promise<void> {
		try {
			if (!this.user) throw new Error('no user found');

			const { id } = this.user;
			const user = await this.rootStore.services.api.users.update(id, userData);

			this.updateUser(user);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		}
	}
}
