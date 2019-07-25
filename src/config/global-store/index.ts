/* npm imports: common */
import { observable, action } from 'mobx';

export class GlobalStore {
	@observable public isDrawerOpen: boolean = false;

	@action public toggleDrawer = (isOpen: boolean | null = null) => {
		this.isDrawerOpen = isOpen !== null ? isOpen : !this.isDrawerOpen;
	};
}

export const globalStore = new GlobalStore();
