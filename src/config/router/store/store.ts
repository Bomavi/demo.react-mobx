import { makeAutoObservable } from 'mobx';
import { State } from 'router5';

class RouterStore {
	public current: State | null = null;
	public pageName = '';

	constructor() {
		makeAutoObservable(this);
	}

	public setCurrent = (state: State): void => {
		this.current = state;
	};

	public setPageName = (name: string): void => {
		this.pageName = name;
	};
}

export const routerStore = new RouterStore();

export type TRouterStore = RouterStore;
