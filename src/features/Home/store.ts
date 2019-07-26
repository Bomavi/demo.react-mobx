/* npm imports: common */
import { observable, computed, action, IObservableArray } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

/* local imports: common */
import { Search } from './search.model';
import { TaskModel } from './task.model';

export class HomeStore extends BaseStore {
	@observable public tasks: IObservableArray<TaskModel> = observable([]);

	@observable public search: Search = new Search();

	@computed public get tasksLength() {
		return this.tasks.length;
	}

	@computed public get tasksList() {
		return this.tasks.slice();
	}

	@computed private get fetchParams() {
		return {
			...this.search.toJSON(),
		};
	}

	@action private setTasks = (tasks: TaskType[]) => {
		this.tasks.replace(tasks.map(t => new TaskModel(t)));
	};

	@action private setTask = (task: TaskType) => {
		this.tasks.replace([...this.tasks, new TaskModel(task)]);
	};

	public searchTasks = async () => {
		try {
			const tasks = await this.services.api.tasks.search(this.fetchParams);
			this.setTasks(tasks);
		} catch (e) {
			console.error(e);
		}
	};

	public addTask = async (taskData: TaskUpdateSchema) => {
		try {
			const task = await this.services.api.tasks.create(taskData);
			this.setTask(task);
		} catch (e) {
			console.error(e);
		}
	};
}

export const homeStore = new HomeStore();
