/* npm imports: common */
import { observable, action } from 'mobx';
import { State } from 'router5';

export class RouterStore {
	@observable public current: State | null = null;
	@observable public pageName: string = '';

	@action public setCurrent = (state: State) => {
		this.current = state;
	};

	@action public setPageName = (name: string) => {
		this.pageName = name;
	};
}

export const routerStore = new RouterStore();
