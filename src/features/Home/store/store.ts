import { observable, IObservableArray, makeAutoObservable, flow } from 'mobx';

import { Services } from 'config/services';

import { createSearchModel, SearchModel } from './search.model';
import { createTaskModel, TaskModel } from './task.model';

export interface HomeStore {
	services: Services;
	search: SearchModel;

	tasks: IObservableArray<TaskModel>;
	isFetching: boolean;
	inProgress: boolean;
	sortKey: SortKey;

	taskList: TaskModel[];
	tasksLength: number;
	isEmpty: boolean;
	sortedByDate: TaskModel[];
	sortedByComplete: TaskModel[];
	fetchParams: any;

	setFetchingState(action: TaskFetchingState, state: boolean): void;
	setTasks(tasks: TaskType[]): void;
	setTask(task: TaskType): void;
	unsetTask(id: string): void;
	replaceTask(task: TaskType): void;
	sortTasks(value: SortKey): void;

	searchTasks(): Promise<void>;
	addTask(taskData: TaskUpdateSchema): Promise<void>;
	updateTask(id: string, taskData: TaskUpdateSchema): Promise<void>;
	deleteTask(id: string): Promise<void>;
}

export const createHomeStore = (): HomeStore => {
	return makeAutoObservable<HomeStore>(
		{
			services: new Services(),
			search: createSearchModel(),

			tasks: observable([]),
			isFetching: false,
			inProgress: false,
			sortKey: 'desc',

			get taskList() {
				return this.tasks.slice();
			},

			get tasksLength() {
				return this.taskList.length;
			},

			get isEmpty() {
				return Boolean(this.tasksLength === 0);
			},

			get sortedByDate() {
				return (this.taskList as TaskModel[]).sort((a, b) => {
					const aDate = Number(new Date(a.createdAt));
					const bDate = Number(new Date(b.createdAt));
					return this.sortKey === 'desc' ? bDate - aDate : aDate - bDate;
				});
			},

			get sortedByComplete() {
				return this.sortKey
					? (this.sortedByDate as TaskModel[]).sort(
							(a, b) => Number(a.completed) - Number(b.completed)
					  )
					: this.taskList;
			},

			get fetchParams() {
				return {
					...this.search.toJSON(),
				};
			},

			setFetchingState(action, state) {
				try {
					if (!action) throw Error('action not found');
					this[action] = state;
				} catch (e) {
					console.error(e);
				}
			},

			setTasks(tasks) {
				this.tasks.replace(tasks.map((t) => createTaskModel(t)));
			},

			setTask(task) {
				this.tasks.replace([...this.tasks, createTaskModel(task)]);
			},

			unsetTask(id) {
				this.tasks.replace(
					(this.taskList as TaskModel[]).filter((t) => t.id !== id)
				);
			},

			replaceTask(task) {
				this.tasks.replace(
					(this.taskList as TaskModel[]).map((t) =>
						t.id === task._id ? createTaskModel(task) : t
					)
				);
			},

			sortTasks(value) {
				this.sortKey = value;
			},

			async searchTasks() {
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
			},

			async addTask(taskData) {
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
			},

			async updateTask(id, taskData) {
				try {
					const task = await this.services.api.tasks.update(id, taskData);
					this.replaceTask(task);
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
				}
			},

			async deleteTask(id) {
				try {
					await this.services.api.tasks.delete(id);
					this.unsetTask(id);
				} catch ({ message }) {
					if (message === 'Network Error') throw message;
					console.error(message);
				}
			},
		},
		{
			services: false,
			search: false,
			// searchTasks: flow,
			// addTask: flow,
			// updateTask: flow,
			// deleteTask: flow,
		}
	);
};

// export class HomeStore {
// 	public readonly rootStore: TRootStore;

// 	public tasks: IObservableArray<TaskModel> = observable([]);

// 	public isFetching = false;
// 	public inProgress = false;

// 	public sortKey: SortKey = 'desc';
// 	public readonly search: Search = new Search();

// 	constructor(rootStore: TRootStore) {
// 		makeAutoObservable(this, {
// 			rootStore: false,
// 			searchTasks: flow,
// 			addTask: flow,
// 			updateTask: flow,
// 			deleteTask: flow,

// 			search: false, // ! should we disable this model?
// 		});

// 		this.rootStore = rootStore;
// 	}

// 	public get taskList(): TaskModel[] {
// 		return this.tasks.slice();
// 	}

// 	public get tasksLength(): number {
// 		return this.taskList.length;
// 	}

// 	public get isEmpty(): boolean {
// 		return this.tasksLength === 0;
// 	}

// 	public get sortedByDate(): TaskModel[] {
// 		return this.taskList.sort((a, b) => {
// 			const aDate = Number(new Date(a.createdAt));
// 			const bDate = Number(new Date(b.createdAt));
// 			return this.sortKey === 'desc' ? bDate - aDate : aDate - bDate;
// 		});
// 	}

// 	public get sortedByComplete(): TaskModel[] {
// 		return this.sortKey
// 			? this.sortedByDate.sort((a, b) => Number(a.completed) - Number(b.completed))
// 			: this.taskList;
// 	}

// 	private get fetchParams() {
// 		return {
// 			...this.search.toJSON(),
// 		};
// 	}

// 	public setFetchingState = (action: TaskFetchingState, state: boolean): void => {
// 		try {
// 			if (!action) throw Error('action not found');
// 			this[action] = state;
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	};

// 	public setTasks = (tasks: TaskType[]): void => {
// 		this.tasks.replace(tasks.map((t) => new TaskModel(t)));
// 	};

// 	private setTask = (task: TaskType): void => {
// 		this.tasks.replace([...this.tasks, new TaskModel(task)]);
// 	};

// 	private unsetTask = (id: string): void => {
// 		this.tasks.replace(this.taskList.filter((t) => t.id !== id));
// 	};

// 	private replaceTask = (task: TaskType): void => {
// 		this.tasks.replace(
// 			this.taskList.map((t) => (t.id === task._id ? new TaskModel(task) : t))
// 		);
// 	};

// 	public sortTasks = (value: SortKey): void => {
// 		this.sortKey = value;
// 	};

// 	public searchTasks = async (): Promise<void> => {
// 		this.setFetchingState('isFetching', true);

// 		try {
// 			const tasks = await this.rootStore.services.api.tasks.search(
// 				this.fetchParams
// 			);
// 			this.setTasks(tasks);
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		} finally {
// 			this.setFetchingState('isFetching', false);
// 		}
// 	};

// 	public addTask = async (taskData: TaskUpdateSchema): Promise<void> => {
// 		this.setFetchingState('inProgress', true);

// 		try {
// 			const task = await this.rootStore.services.api.tasks.create(taskData);
// 			this.setTask(task);
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		} finally {
// 			this.setFetchingState('inProgress', false);
// 		}
// 	};

// 	public updateTask = async (id: string, taskData: TaskUpdateSchema): Promise<void> => {
// 		try {
// 			const task = await this.rootStore.services.api.tasks.update(id, taskData);
// 			this.replaceTask(task);
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		}
// 	};

// 	public deleteTask = async (id: string): Promise<void> => {
// 		try {
// 			await this.rootStore.services.api.tasks.delete(id);
// 			this.unsetTask(id);
// 		} catch ({ message }) {
// 			if (message === 'Network Error') throw message;
// 			console.error(message);
// 		}
// 	};
// }
