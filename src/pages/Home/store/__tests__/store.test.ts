import { task, tasks } from '__mocks__/data';
import { MockedHomeStore } from '__mocks__/store/home';
import { mockedTasksServerResponse } from '__mocks__/services/tasks';

import { HomeStore } from './store';

describe('HomeStore', () => {
  afterEach(() => {
    mockedTasksServerResponse.reset();
  });

  afterAll(() => {
    mockedTasksServerResponse.restore();
  });

  it('should be empty', () => {
    const store = new HomeStore();

    expect(store.isEmpty).toBe(true);
  });

  it('should set fetching state', () => {
    const store = new HomeStore();

    store.setFetchingState('isFetching', true);
    store.setFetchingState('inProgress', true);

    expect(store.isFetching).toBe(true);
    expect(store.inProgress).toBe(true);
  });

  it('should search tasks (failed response)', async () => {
    mockedTasksServerResponse.initFailResponse();

    const store = new HomeStore();

    try {
      await store.searchTasks();
    } catch (e) {
      expect(e).toEqual('Network Error');
    }

    expect(store.isEmpty).toBe(true);
  });

  it('should search tasks (success response)', async () => {
    mockedTasksServerResponse.initSuccessResponse();

    const store = new HomeStore();
    const mockedStore = new MockedHomeStore();

    mockedStore.setTasks(tasks);

    await store.searchTasks();

    expect(store.isEmpty).toBe(false);
    expect(store.taskList).toEqual(mockedStore.taskList);
  });

  it('should add new task (failed response)', async () => {
    mockedTasksServerResponse.initFailResponse();

    const store = new HomeStore();

    try {
      await store.addTask({
        description: task.description,
        completed: task.completed,
      });
    } catch (e) {
      expect(e).toEqual('Network Error');
    }

    expect(store.isEmpty).toBe(true);
  });

  it('should add new task (success response)', async () => {
    mockedTasksServerResponse.initSuccessResponse();

    const store = new HomeStore();
    const mockedStore = new MockedHomeStore();

    mockedStore.setTask(task);

    await store.addTask({
      description: task.description,
      completed: task.completed,
    });

    expect(store.taskList).toEqual(mockedStore.taskList);
  });

  it('should update task (failed response)', async () => {
    mockedTasksServerResponse.initFailResponse();

    const store = new HomeStore();

    store.setTasks(tasks);

    try {
      await store.updateTask(task._id, {
        description: task.description,
        completed: task.completed,
      });
    } catch (e) {
      expect(e).toEqual('Network Error');
    }
  });

  it('should update task (success response)', async () => {
    mockedTasksServerResponse.initSuccessResponse();

    const store = new HomeStore();
    const mockedStore = new MockedHomeStore();

    store.setTasks(tasks);
    mockedStore.setTasks(tasks);

    await store.updateTask(task._id, {
      description: task.description,
      completed: task.completed,
    });

    expect(store.taskList).toEqual(mockedStore.taskList);
  });

  it('should delete task (failed response)', async () => {
    mockedTasksServerResponse.initFailResponse();

    const store = new HomeStore();

    store.setTasks(tasks);

    try {
      await store.deleteTask(task._id);
    } catch (e) {
      expect(e).toEqual('Network Error');
    }
  });

  it('should delete task (success response)', async () => {
    mockedTasksServerResponse.initSuccessResponse();

    const store = new HomeStore();
    const mockedStore = new MockedHomeStore();

    store.setTasks(tasks);
    mockedStore.setTasks(tasks.filter((t) => t._id !== task._id));

    await store.deleteTask(task._id);

    expect(store.taskList).toEqual(mockedStore.taskList);
  });
});
