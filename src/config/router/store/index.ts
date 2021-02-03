/* npm imports: common */
import { observable, action } from 'mobx';
import { State } from 'router5';

export class RouterStore {
	@observable public current: State | null = null;
	@observable public pageName = '';

	@action public setCurrent = (state: State): void => {
		this.current = state;
	};

	@action public setPageName = (name: string): void => {
		this.pageName = name;
	};
}

export const routerStore = new RouterStore();
