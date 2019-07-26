/* npm imports: common */
// import { computed } from 'mobx';

export class TaskModel {
	public readonly id: string = '';
	public readonly description: string = '';
	public readonly completed: boolean = false;
	public readonly createdAt: string = '';
	public readonly updatedAt: string = '';

	public constructor(props: Partial<TaskType>) {
		if (props._id) this.id = props._id;
		if (props.description) this.description = props.description;
		if (props.completed) this.completed = props.completed;
		if (props.createdAt) this.createdAt = props.createdAt;
		if (props.updatedAt) this.updatedAt = props.updatedAt;
	}

	// @computed public get created_at() {
	// 	return moment(this.createdAt).format();
	// }
}
