/* npm imports: common */
import { observable, computed, action, IObservableArray } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

/* local imports: common */
import { Search } from './search.model';
import { TaskModel } from './task.model';

export class HomeStore extends BaseStore {
	@observable public tasks: IObservableArray<TaskModel> = observable([]);

	@observable public isFetching = false;
	@observable public inProgress = false;

	@observable public sortKey: SortKey = 'desc';
	@observable.ref public readonly search: Search = new Search();

	@computed public get taskList(): TaskModel[] {
		return this.tasks.slice();
	}

	@computed public get tasksLength(): number {
		return this.taskList.length;
	}

	@computed public get isEmpty(): boolean {
		return this.tasksLength === 0;
	}

	@computed public get sortedByDate(): TaskModel[] {
		return this.taskList.sort((a, b) => {
			const aDate = Number(new Date(a.createdAt));
			const bDate = Number(new Date(b.createdAt));
			return this.sortKey === 'desc' ? bDate - aDate : aDate - bDate;
		});
	}

	@computed public get sortedByComplete(): TaskModel[] {
		return this.sortKey
			? this.sortedByDate.sort((a, b) => Number(a.completed) - Number(b.completed))
			: this.taskList;
	}

	@computed private get fetchParams() {
		return {
			...this.search.toJSON(),
		};
	}

	@action public setFetchingState = (
		action: TaskFetchingState,
		state: boolean
	): void => {
		try {
			if (!action) throw Error('action not found');
			this[action] = state;
		} catch (e) {
			console.error(e);
		}
	};

	@action public setTasks = (tasks: TaskType[]): void => {
		this.tasks.replace(tasks.map((t) => new TaskModel(t)));
	};

	@action private setTask = (task: TaskType) => {
		this.tasks.replace([...this.tasks, new TaskModel(task)]);
	};

	@action private unsetTask = (id: string) => {
		this.tasks.replace(this.taskList.filter((t) => t.id !== id));
	};

	@action private replaceTask = (task: TaskType) => {
		this.tasks.replace(
			this.taskList.map((t) => (t.id === task._id ? new TaskModel(task) : t))
		);
	};

	@action public sortTasks = (value: SortKey): void => {
		this.sortKey = value;
	};

	public searchTasks = async (): Promise<void> => {
		this.setFetchingState('isFetching', true);

		try {
			const tasks = await this.services.api.tasks.search(this.fetchParams);
			this.setTasks(tasks);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setFetchingState('isFetching', false);
		}
	};

	public addTask = async (taskData: TaskUpdateSchema): Promise<void> => {
		this.setFetchingState('inProgress', true);

		try {
			const task = await this.services.api.tasks.create(taskData);
			this.setTask(task);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		} finally {
			this.setFetchingState('inProgress', false);
		}
	};

	public updateTask = async (id: string, taskData: TaskUpdateSchema): Promise<void> => {
		try {
			const task = await this.services.api.tasks.update(id, taskData);
			this.replaceTask(task);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		}
	};

	public deleteTask = async (id: string): Promise<void> => {
		try {
			await this.services.api.tasks.delete(id);
			this.unsetTask(id);
		} catch ({ message }) {
			if (message === 'Network Error') throw message;
			console.error(message);
		}
	};
}

export const homeStore = new HomeStore();
