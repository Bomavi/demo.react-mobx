import { makeAutoObservable } from 'mobx';
import { format } from 'date-fns';

export class TaskModel {
	public readonly id: string = '';
	public readonly description: string = '';
	public readonly completed: boolean = false;
	public readonly createdAt: string | number = '';
	public readonly updatedAt: string | number = '';

	public updateInProgress = false;
	public deleteInProgress = false;

	public constructor(props: Partial<TaskType>) {
		makeAutoObservable(this, {
			id: false,
			description: false,
			completed: false,
			createdAt: false,
			updatedAt: false,
		});

		if (props._id) this.id = props._id;
		if (props.description) this.description = props.description;
		if (props.completed) this.completed = props.completed;
		if (props.createdAt) this.createdAt = props.createdAt;
		if (props.updatedAt) this.updatedAt = props.updatedAt;
	}

	public get created(): string {
		return format(this.createdAt as number, 'D MMMM, YYYY HH:mm:ss');
	}

	public setActionInProgress = (action: TaskActionInProgress, state: boolean): void => {
		try {
			if (!action) throw Error('action not found');
			this[action] = state;
		} catch (e) {
			console.error(e);
		}
	};
}
