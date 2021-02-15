import { makeAutoObservable, flow } from 'mobx';

import { Theme } from '@material-ui/core/styles';

import { Services } from 'config/services';
import { history } from 'router/config/history';
import { lightTheme, darkTheme } from 'utils/themes';

import { createUserModel, UserModel } from './user.model';

export interface AuthStore {
	services: Services;

	user: UserModel | null;
	isInitialized: boolean;
	inProgress: boolean;
	selectedThemeType: MUIThemeType;

	isAuthenticated: boolean;
	themeNameToSwitch: MUIThemeType;
	selectedTheme: Theme;

	changeSelectedThemeType(themeType: MUIThemeType): void;
	setInProgress(state: boolean): void;
	setUser(user: UserType): void;
	unsetUser(): void;
	updateUser(user: UserType): void;
	initialize(): void;

	switchTheme(): Promise<void>;
	authenticate(): Promise<void>;
	login(userData: LoginType): Promise<void>;
	register(userData: RegisterType): Promise<void>;
	logout(): Promise<void>;
	update(userData: UserUpdateSchema): Promise<void>;
}

export const createAuthStore = (): AuthStore => {
	return makeAutoObservable<AuthStore>(
		{
			services: new Services(),

			user: null,
			isInitialized: false,
			inProgress: false,
			selectedThemeType: 'light',

			get isAuthenticated() {
				return !!this.user;
			},

			get themeNameToSwitch() {
				switch (this.selectedThemeType) {
					case 'light':
						return 'dark';

					case 'dark':
						return 'light';

					default:
						return 'light';
				}
			},

			get selectedTheme() {
				switch (this.selectedThemeType) {
					case 'light':
						return lightTheme;

					case 'dark':
						return darkTheme;

					default:
						return lightTheme;
				}
			},

			changeSelectedThemeType(themeType) {
				this.selectedThemeType = themeType;
			},

			setInProgress(state: boolean): void {
				this.inProgress = state;
			},

			setUser(user: UserType): void {
				this.user = createUserModel(user);
				this.changeSelectedThemeType(user.theme);
			},

			unsetUser(): void {
				this.user = null;
			},

			updateUser(user: UserType): void {
				this.user = createUserModel(user);
				this.changeSelectedThemeType(user.theme);
			},

			initialize(): void {
				this.isInitialized = true;
			},

			async switchTheme(): Promise<void> {
				try {
					if (!this.user) throw new Error('no user found');

					this.user.setSwitchThemeState(true);
					await this.update({ theme: this.themeNameToSwitch });
				} catch (e) {
					if (e === 'Network Error') throw e;
					console.error(e);
				}
			},

			async authenticate(): Promise<void> {
				try {
					const user = await this.services.auth.authenticate();

					this.setUser(user);
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
					history.push('/login');
				} finally {
					this.initialize();
				}
			},

			async login(userData: LoginType): Promise<void> {
				this.setInProgress(true);

				try {
					const user = await this.services.auth.login(userData);

					this.setUser(user);
					history.push('/home');
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
				} finally {
					this.setInProgress(false);
				}
			},

			async register(userData: RegisterType): Promise<void> {
				this.setInProgress(true);

				try {
					const user = await this.services.auth.register(userData);

					this.setUser(user);
					history.push('/home');
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
				} finally {
					this.setInProgress(false);
				}
			},

			async logout(): Promise<void> {
				this.setInProgress(true);

				try {
					await this.services.auth.logout();

					this.unsetUser();
					history.push('/login');
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
				} finally {
					this.setInProgress(false);
				}
			},

			async update(userData: UserUpdateSchema): Promise<void> {
				try {
					if (!this.user) throw new Error('no user found');

					const { id } = this.user;
					const user = await this.services.api.users.update(id, userData);

					this.updateUser(user);
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
				}
			},
		},
		{
			services: false,
			// switchTheme: flow,
			// authenticate: flow,
			// login: flow,
			// register: flow,
			// logout: flow,
			// update: flow,
		}
	);
};

// export class AuthStore {
// 	public readonly rootStore: TRootStore;

// 	public user: UserModel | null = null;

// 	public isInitialized = false;
// 	public inProgress = false;

// 	public selectedThemeType: MUIThemeType = 'light';

// 	constructor(rootStore: TRootStore) {
// 		makeAutoObservable(this, {
// 			rootStore: false,
// 			switchTheme: flow,
// 			authenticate: flow,
// 			login: flow,
// 			register: flow,
// 			logout: flow,
// 			update: flow,
// 		});

// 		this.rootStore = rootStore;
// 	}

// 	public get isAuthenticated(): boolean {
// 		return !!this.user;
// 	}

// 	public get themeNameToSwitch(): MUIThemeType {
// 		switch (this.selectedThemeType) {
// 			case 'light':
// 				return 'dark';

// 			case 'dark':
// 				return 'light';

// 			default:
// 				return 'light';
// 		}
// 	}

// 	public get selectedTheme(): Theme {
// 		switch (this.selectedThemeType) {
// 			case 'light':
// 				return lightTheme;

// 			case 'dark':
// 				return darkTheme;

// 			default:
// 				return lightTheme;
// 		}
// 	}

// 	public changeSelectedThemeType = (themeType: MUIThemeType): void => {
// 		this.selectedThemeType = themeType;
// 	};

// 	public setInProgress = (state: boolean): void => {
// 		this.inProgress = state;
// 	};

// 	public setUser = (user: UserType): void => {
// 		this.user = new UserModel(user);
// 		this.changeSelectedThemeType(user.theme);
// 	};

// 	private unsetUser = (): void => {
// 		this.user = null;
// 	};

// 	private updateUser = (user: UserType): void => {
// 		this.user = new UserModel(user);
// 		this.changeSelectedThemeType(user.theme);
// 	};

// 	private initialize = (): void => {
// 		this.isInitialized = true;
// 	};

// 	public switchTheme = async (): Promise<void> => {
// 		try {
// 			if (!this.user) throw new Error('no user found');

// 			this.user.setSwitchThemeState(true);
// 			await this.update({ theme: this.themeNameToSwitch });
// 		} catch (e) {
// 			if (e === 'Network Error') throw e;
// 			console.error(e);
// 		}
// 	};

// 	public authenticate = async (): Promise<void> => {
// 		try {
// 			const user = await this.rootStore.services.auth.authenticate();

// 			this.setUser(user);
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 			history.push('/login');
// 		} finally {
// 			this.initialize();
// 		}
// 	};

// 	public login = async (userData: LoginType): Promise<void> => {
// 		this.setInProgress(true);

// 		try {
// 			const user = await this.rootStore.services.auth.login(userData);

// 			this.setUser(user);
// 			history.push('/home');
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		} finally {
// 			this.setInProgress(false);
// 		}
// 	};

// 	public register = async (userData: RegisterType): Promise<void> => {
// 		this.setInProgress(true);

// 		try {
// 			const user = await this.rootStore.services.auth.register(userData);

// 			this.setUser(user);
// 			history.push('/home');
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		} finally {
// 			this.setInProgress(false);
// 		}
// 	};

// 	public logout = async (): Promise<void> => {
// 		this.setInProgress(true);

// 		try {
// 			await this.rootStore.services.auth.logout();

// 			this.unsetUser();
// 			history.push('/login');
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		} finally {
// 			this.setInProgress(false);
// 		}
// 	};

// 	public update = async (userData: UserUpdateSchema): Promise<void> => {
// 		try {
// 			if (!this.user) throw new Error('no user found');

// 			const { id } = this.user;
// 			const user = await this.rootStore.services.api.users.update(id, userData);

// 			this.updateUser(user);
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		}
// 	};
// }
