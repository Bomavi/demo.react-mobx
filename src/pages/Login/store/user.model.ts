import { makeAutoObservable } from 'mobx';
import { format } from 'date-fns';

export class UserModel {
  public readonly id: string = '';
  public readonly username: string = '';
  public readonly theme: MUIThemeType = 'light';
  public readonly createdAt: string | number = '';
  public readonly updatedAt: string | number = '';

  public switchThemeInProgress = false;

  public constructor(props: Partial<UserType>) {
    makeAutoObservable(this, {
      id: false,
      username: false,
      theme: false,
      created: false,
      updatedAt: false,
    });

    if (props._id) this.id = props._id;
    if (props.username) this.username = props.username;
    if (props.theme) this.theme = props.theme;
    if (props.createdAt) this.createdAt = props.createdAt;
    if (props.updatedAt) this.updatedAt = props.updatedAt;
  }

  public get created(): string {
    return format(this.createdAt as number, 'D MMMM, YYYY HH:mm:ss');
  }

  public setSwitchThemeState = (state: boolean): void => {
    this.switchThemeInProgress = state;
  };
}
