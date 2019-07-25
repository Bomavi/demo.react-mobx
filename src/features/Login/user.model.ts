/* npm imports: common */
// import { computed } from 'mobx';

export class UserModel {
	public readonly id: string = '';
	public readonly username: string = '';
	public readonly createdAt: string = '';
	public readonly updatedAt: string = '';

	public constructor(props: Partial<UserType>) {
		if (props._id) this.id = props._id;
		if (props.username) this.username = props.username;
		if (props.createdAt) this.createdAt = props.createdAt;
		if (props.updatedAt) this.updatedAt = props.updatedAt;
	}

	// @computed public get created_at() {
	// 	return moment(this.createdAt).format();
	// }
}
