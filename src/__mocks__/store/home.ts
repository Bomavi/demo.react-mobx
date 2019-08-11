/* npm imports: common */
import { observable, computed, action, IObservableArray } from 'mobx';

/* mock imports: common */
// import { tasks } from '__mocks__/data';

/* local imports: common */
import { Search } from 'features/Home/search.model';
import { TaskModel } from 'features/Home/task.model';

export class MockedHomeStore {
	@observable public tasks: IObservableArray<TaskModel> = observable([]);

	@observable public isFetching: boolean = false;
	@observable public inProgress: boolean = false;

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

	@computed public get fetchParams() {
		return {
			...this.search.toJSON(),
		};
	}

	@action public setTasks = (tasks: TaskType[]) => {
		this.tasks.replace(tasks.map(t => new TaskModel(t)));
	};

	@action public setTask = (task: TaskType) => {
		this.tasks.replace([...this.tasks, new TaskModel(task)]);
	};

	@action public unsetTask = (id: string) => {
		this.tasks.replace(this.taskList.filter(t => t.id !== id));
	};

	@action public replaceTask = (task: TaskType) => {
		this.tasks.replace(
			this.taskList.map(t => (t.id === task._id ? new TaskModel(task) : t))
		);
	};

	@action public sortTasks = (value: SortKey) => {
		this.sortKey = value;
	};
}

export const mockedHomeStore = new MockedHomeStore();
