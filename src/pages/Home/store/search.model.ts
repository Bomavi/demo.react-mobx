import { makeAutoObservable } from 'mobx';

import { maybe } from 'utils/helpers';

export class Search {
  public q = '';

  constructor() {
    makeAutoObservable(this, { toJSON: false });
  }

  public onChange = (name: TasksSearchKeys, value: string): void => {
    try {
      if (this[name] === undefined) throw Error(`${name} - field not found`);
      this[name] = value;
    } catch (e) {
      console.error(e);
    }
  };

  public reset = (): void => {
    this.q = '';
  };

  public toJSON = (): Record<string, any> => ({
    q: maybe(this.q),
  });
}
