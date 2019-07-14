import { observable, computed } from 'mobx';

export class HomeStore {
	@observable public name: string = 'Maksym';
	@observable public surname: string = 'Bozhenov';

	@computed public get fullName(): string {
	    return `${this.name} ${this.surname}`;
	}
}

export const homeStore = new HomeStore();
