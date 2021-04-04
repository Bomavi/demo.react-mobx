import { action, computed, IObservableArray, observable } from 'mobx';

// import { tasks } from '__mocks__/data';

import { Search } from 'pages/Home/store/search.model';
import { TaskModel } from 'pages/Home/store/task.model';

export class MockedHomeStore {
  // @observable public tasks: IObservableArray<TaskModel> = observable([]);
  // @observable public isFetching = false;
  // @observable public inProgress = false;
  // @observable public sortKey: SortKey = 'desc';
  // @observable.ref public readonly search: SearchModel = createSearchModel();
  // @computed public get taskList(): TaskModel[] {
  // 	return this.tasks.slice();
  // }
  // @computed public get tasksLength(): number {
  // 	return this.taskList.length;
  // }
  // @computed public get isEmpty(): boolean {
  // 	return this.tasksLength === 0;
  // }
  // @computed public get fetchParams() {
  // 	return {
  // 		...this.search.toJSON(),
  // 	};
  // }
  // @action public setTasks = (tasks: TaskType[]) => {
  // 	this.tasks.replace(tasks.map((t) => createTaskModel(t)));
  // };
  // @action public setTask = (task: TaskType) => {
  // 	this.tasks.replace([...this.tasks, createTaskModel(task)]);
  // };
  // @action public unsetTask = (id: string) => {
  // 	this.tasks.replace(this.taskList.filter((t) => t.id !== id));
  // };
  // @action public replaceTask = (task: TaskType) => {
  // 	this.tasks.replace(
  // 		this.taskList.map((t) => (t.id === task._id ? createTaskModel(task) : t))
  // 	);
  // };
  // @action public sortTasks = (value: SortKey) => {
  // 	this.sortKey = value;
  // };
}

export const mockedHomeStore = new MockedHomeStore();
