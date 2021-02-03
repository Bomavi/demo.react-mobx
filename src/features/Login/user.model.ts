/* npm imports: common */
import { observable, computed, action } from 'mobx';
import { format } from 'date-fns';

export class UserModel {
	public readonly id: string = '';
	public readonly username: string = '';
	public readonly theme: MUIThemeType = 'light';
	public readonly createdAt: string | number = '';
	public readonly updatedAt: string | number = '';

	public constructor(props: Partial<UserType>) {
		if (props._id) this.id = props._id;
		if (props.username) this.username = props.username;
		if (props.theme) this.theme = props.theme;
		if (props.createdAt) this.createdAt = props.createdAt;
		if (props.updatedAt) this.updatedAt = props.updatedAt;
	}

	@observable public switchThemeInProgress = false;

	@computed public get created(): string {
		return format(this.createdAt as number, 'D MMMM, YYYY HH:mm:ss');
	}

	@action public setSwitchThemeState = (state: boolean): void => {
		this.switchThemeInProgress = state;
	};
}
