import { task } from '__mocks__/data';

import { TaskModel } from './task.model';

const model = new TaskModel(task);

describe('Task model', () => {
  it('should have all basic fields', () => {
    expect(model.id).toEqual(task._id);
    expect(model.completed).toEqual(task.completed);
    expect(model.description).toEqual(task.description);
    expect(model.createdAt).toEqual(task.createdAt);
    expect(model.updatedAt).toEqual(task.updatedAt);
  });

  it('should have custom fields', () => {
    expect(!!model.created).toBe(true);
  });

  it('should have custom fields for inProgress to be equal - false', () => {
    expect(model.updateInProgress).toBe(false);
    expect(model.deleteInProgress).toBe(false);
  });

  it('should have custom fields for inProgress to be equal - true', () => {
    model.setActionInProgress('updateInProgress', true);
    model.setActionInProgress('deleteInProgress', true);

    expect(model.updateInProgress).toBe(true);
    expect(model.deleteInProgress).toBe(true);
  });
});
