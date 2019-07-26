/* npm imports: common */
import { observable, computed, action } from 'mobx';

/* root imports: common */
import { BaseStore } from 'config/base-store';

/* local imports: common */
import { Search } from './search.model';

export class HomeStore extends BaseStore {
	@observable public tasks: string[] = [];

	@observable public search: Search = new Search();

	@computed public get tasksLength() {
		return this.tasks.length;
	}

	@computed public get fetchParams() {
		return {
			...this.search.toJSON(),
		};
	}

	@action private setTasks = (tasks: any) => {
		this.tasks = tasks;
	};

	public searchTasks = () => {
		try {
			const tasks = this.services.api.tasks.search(this.fetchParams);
			this.setTasks(tasks);
		} catch (e) {
			console.error(e);
		}
	};
}

export const homeStore = new HomeStore();
