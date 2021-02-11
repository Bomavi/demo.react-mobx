import { makeAutoObservable } from 'mobx';
import { State } from 'router5';

export class RouterStore {
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
