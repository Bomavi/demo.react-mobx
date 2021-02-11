import { makeAutoObservable } from 'mobx';

export class UiStore {
	public isDrawerOpen = false;

	constructor() {
		makeAutoObservable(this);
	}

	public toggleDrawer = (isOpen: boolean | null = null): void => {
		this.isDrawerOpen = isOpen !== null ? isOpen : !this.isDrawerOpen;
	};
}
