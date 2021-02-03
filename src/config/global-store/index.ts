/* npm imports: common */
import { observable, action } from 'mobx';

export class GlobalStore {
	@observable public isDrawerOpen = false;

	@action public toggleDrawer = (isOpen: boolean | null = null): void => {
		this.isDrawerOpen = isOpen !== null ? isOpen : !this.isDrawerOpen;
	};
}

export const globalStore = new GlobalStore();
