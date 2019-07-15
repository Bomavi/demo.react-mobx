/* npm imports: common */
import { observable, computed } from 'mobx';

export class HomeStore {
	@observable public name: string = 'Maksym';
	@observable public surname: string = 'Bozhenov';

	@computed public get fullName() {
		return `${this.name} ${this.surname}`;
	}
}

export const homeStore = new HomeStore();
