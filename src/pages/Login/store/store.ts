import { makeAutoObservable } from 'mobx';

import { Theme } from '@material-ui/core/styles';

import { Services } from 'config/services';
import { history } from 'router/config/history';
import { darkTheme, lightTheme } from 'utils/themes';

import { UserModel } from './user.model';

export class AuthStore {
  public readonly services = new Services();

  public user: UserModel | null = null;

  public isInitialized = false;
  public inProgress = false;

  public selectedThemeType: MUIThemeType = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  public get isAuthenticated(): boolean {
    return Boolean(this.user);
  }

  public get isAuthorized(): boolean {
    return !this.isInitialized || this.isAuthenticated;
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

  public changeSelectedThemeType = (themeType: MUIThemeType): void => {
    this.selectedThemeType = themeType;
  };

  public setInProgress = (state: boolean): void => {
    this.inProgress = state;
  };

  public setUser = (user: UserType): void => {
    this.user = new UserModel(user);
    this.changeSelectedThemeType(user.theme);
  };

  public unsetUser = (): void => {
    this.user = null;
  };

  public updateUser = (user: UserType): void => {
    this.user = new UserModel(user);
    this.changeSelectedThemeType(user.theme);
  };

  public initialize = (): void => {
    this.isInitialized = true;
  };

  public switchTheme = async (): Promise<void> => {
    try {
      if (!this.user) throw new Error('no user found');

      this.user.setSwitchThemeState(true);
      await this.update({ theme: this.themeNameToSwitch });
    } catch (e) {
      if (e === 'Network Error') throw e;
      console.error(e);
    }
  };

  public authenticate = async (): Promise<void> => {
    try {
      const user = await this.services.auth.authenticate();

      this.setUser(user);
    } catch ({ message }) {
      if (message === 'Network Error') throw message;
      console.error(message);
      // history.push('/login');
    } finally {
      this.initialize();
    }
  };

  public login = async (userData: LoginType): Promise<void> => {
    this.setInProgress(true);

    try {
      const user = await this.services.auth.login(userData);

      this.setUser(user);
      history.push('/');
    } catch ({ message }) {
      if (message === 'Network Error') throw message;
      console.error(message);
    } finally {
      this.setInProgress(false);
    }
  };

  public register = async (userData: RegisterType): Promise<void> => {
    this.setInProgress(true);

    try {
      const user = await this.services.auth.register(userData);

      this.setUser(user);
      history.push('/');
    } catch ({ message }) {
      if (message === 'Network Error') throw message;
      console.error(message);
    } finally {
      this.setInProgress(false);
    }
  };

  public logout = async (): Promise<void> => {
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
  };

  public update = async (userData: UserUpdateSchema): Promise<void> => {
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
