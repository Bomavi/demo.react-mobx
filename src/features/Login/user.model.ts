/* npm imports: common */
import { computed } from 'mobx';

export class UserModel {
	public readonly username: string = '';
	public readonly createdAt: string = '';
	public readonly updatedAt: string = '';

	public constructor(props: Partial<UserType>) {
		if (props.username) this.username = props.username;
		if (props.createdAt) this.createdAt = props.createdAt;
		if (props.updatedAt) this.updatedAt = props.updatedAt;
	}

	@computed public get isAuthenticated() {
		return !!this.username;
	}
}
