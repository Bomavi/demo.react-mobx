/* npm imports: common */
import { observable, computed, action, IObservableArray } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

/* local imports: common */
import { Search } from './search.model';
import { TaskModel } from './task.model';

export class HomeStore extends BaseStore {
	@observable public tasks: IObservableArray<TaskModel> = observable([]);

	@observable public isFetching: boolean = false;
	@observable public inProgress: boolean = false;

	@observable.ref public readonly search: Search = new Search();

	@computed public get tasksLength(): number {
		return this.tasks.length;
	}

	@computed public get isEmpty(): boolean {
		return this.tasksLength === 0;
	}

	@computed public get taskList() {
		return this.tasks.slice();
	}

	@computed private get fetchParams() {
		return {
			...this.search.toJSON(),
		};
	}

	@action public setFetchingState = (action: TaskFetchingState, state: boolean) => {
		try {
			if (!action) throw Error('action not found');
			this[action] = state;
		} catch (e) {
			console.error(e);
		}
	};

	@action private setTasks = (tasks: TaskType[]) => {
		this.tasks.replace(tasks.map(t => new TaskModel(t)));
	};

	@action private setTask = (task: TaskType) => {
		this.tasks.replace([...this.tasks, new TaskModel(task)]);
	};

	@action private unsetTask = (id: string) => {
		this.tasks.replace(this.taskList.filter(t => t.id !== id));
	};

	@action private replaceTask = (task: TaskType) => {
		this.tasks.replace(
			this.taskList.map(t => (t.id === task._id ? new TaskModel(task) : t))
		);
	};

	public searchTasks = async () => {
		try {
			this.setFetchingState('isFetching', true);
			const tasks = await this.services.api.tasks.search(this.fetchParams);
			this.setTasks(tasks);
		} catch (e) {
			console.error(e);
		} finally {
			this.setFetchingState('isFetching', false);
		}
	};

	public addTask = async (taskData: TaskUpdateSchema) => {
		try {
			this.setFetchingState('inProgress', true);
			const task = await this.services.api.tasks.create(taskData);
			this.setTask(task);
		} catch (e) {
			console.error(e);
		} finally {
			this.setFetchingState('inProgress', false);
		}
	};

	public updateTask = async (id: string, taskData: TaskUpdateSchema) => {
		try {
			const task = await this.services.api.tasks.update(id, taskData);
			this.replaceTask(task);
		} catch (e) {
			console.error(e);
		}
	};

	public deleteTask = async (id: string) => {
		try {
			await this.services.api.tasks.delete(id);
			this.unsetTask(id);
		} catch (e) {
			console.error(e);
		}
	};
}

export const homeStore = new HomeStore();
