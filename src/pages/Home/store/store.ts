import { IObservableArray, makeAutoObservable, observable } from 'mobx';

import { Services } from 'config/services';

import { Search } from './search.model';
import { TaskModel } from './task.model';

export class HomeStore {
  public readonly services = new Services();

  public tasks: IObservableArray<TaskModel> = observable([]);

  public isFetching = false;
  public inProgress = false;

  public sortKey: SortKey = 'desc';
  public readonly search: Search = new Search();

  constructor() {
    makeAutoObservable(this, {
      services: false,
      search: false, // ! should we disable this model?
    });
  }

  public get taskList(): TaskModel[] {
    return this.tasks.slice();
  }

  public get tasksLength(): number {
    return this.taskList.length;
  }

  public get isEmpty(): boolean {
    return this.tasksLength === 0;
  }

  public get sortedByDate(): TaskModel[] {
    return this.taskList.sort((a, b) => {
      const aDate = Number(new Date(a.createdAt));
      const bDate = Number(new Date(b.createdAt));
      return this.sortKey === 'desc' ? bDate - aDate : aDate - bDate;
    });
  }

  public get sortedByComplete(): TaskModel[] {
    return this.sortKey
      ? this.sortedByDate.sort(
          (a, b) => Number(a.completed) - Number(b.completed)
        )
      : this.taskList;
  }

  private get fetchParams() {
    return {
      ...this.search.toJSON(),
    };
  }

  public setFetchingState = (
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

  public setTasks = (tasks: TaskType[]): void => {
    this.tasks.replace(tasks.map((t) => new TaskModel(t)));
  };

  private setTask = (task: TaskType): void => {
    this.tasks.replace([...this.tasks, new TaskModel(task)]);
  };

  private unsetTask = (id: string): void => {
    this.tasks.replace(this.taskList.filter((t) => t.id !== id));
  };

  private replaceTask = (task: TaskType): void => {
    this.tasks.replace(
      this.taskList.map((t) => (t.id === task._id ? new TaskModel(task) : t))
    );
  };

  public sortTasks = (value: SortKey): void => {
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

  public updateTask = async (
    id: string,
    taskData: TaskUpdateSchema
  ): Promise<void> => {
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
