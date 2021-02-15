import { makeAutoObservable } from 'mobx';
import { format } from 'date-fns';

export interface UserModel {
	id: string;
	username: string;
	theme: MUIThemeType;
	createdAt: string | number;
	updatedAt: string | number;

	switchThemeInProgress: boolean;

	created: string;

	setSwitchThemeState(state: boolean): void;
}

export const createUserModel = (props: Partial<UserType>): UserModel => {
	return makeAutoObservable<UserModel>(
		{
			id: props._id || '',
			username: props.username || '',
			theme: props.theme || 'light',
			createdAt: props.createdAt || '',
			updatedAt: props.updatedAt || '',

			switchThemeInProgress: false,

			get created() {
				return format(this.createdAt as number, 'D MMMM, YYYY HH:mm:ss');
			},

			setSwitchThemeState(state) {
				this.switchThemeInProgress = state;
			},
		},
		{
			id: false,
			username: false,
			theme: false,
			createdAt: false,
			updatedAt: false,
		}
	);
};

// export class UserModel {
// 	public readonly id: string = '';
// 	public readonly username: string = '';
// 	public readonly theme: MUIThemeType = 'light';
// 	public readonly createdAt: string | number = '';
// 	public readonly updatedAt: string | number = '';

// 	public constructor(props: Partial<UserType>) {
// 		makeAutoObservable(this, {
// 			id: false,
// 			username: false,
// 			theme: false,
// 			created: false,
// 			updatedAt: false,
// 		});

// 		if (props._id) this.id = props._id;
// 		if (props.username) this.username = props.username;
// 		if (props.theme) this.theme = props.theme;
// 		if (props.createdAt) this.createdAt = props.createdAt;
// 		if (props.updatedAt) this.updatedAt = props.updatedAt;
// 	}

// 	public switchThemeInProgress = false;

// 	public get created(): string {
// 		return format(this.createdAt as number, 'D MMMM, YYYY HH:mm:ss');
// 	}

// 	public setSwitchThemeState = (state: boolean): void => {
// 		this.switchThemeInProgress = state;
// 	};
// }
