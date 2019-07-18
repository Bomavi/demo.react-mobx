/* npm imports: common */
import { observable, computed } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

export class HomeStore extends BaseStore {
	@observable public tasks: string[] = [];

	@computed public get tasksLength() {
		return this.tasks.length;
	}
}

export const homeStore = new HomeStore();
