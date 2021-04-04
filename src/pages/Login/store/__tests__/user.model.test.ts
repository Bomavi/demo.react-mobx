import { user } from '__mocks__/data';

import { UserModel } from './user.model';

const model = new UserModel(user);

describe('User model', () => {
  it('should have all basic fields', () => {
    expect(model.id).toEqual(user._id);
    expect(model.username).toEqual(user.username);
    expect(model.theme).toEqual(user.theme);
    expect(model.createdAt).toEqual(user.createdAt);
    expect(model.updatedAt).toEqual(user.updatedAt);
  });

  it('should have custom fields', () => {
    expect(!!model.created).toBe(true);
  });

  it('should have custom fields for inProgress to be equal - false', () => {
    expect(model.switchThemeInProgress).toBe(false);
  });

  it('should have custom fields for inProgress to be equal - true', () => {
    model.setSwitchThemeState(true);

    expect(model.switchThemeInProgress).toBe(true);
  });
});
