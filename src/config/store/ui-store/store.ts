import { makeAutoObservable } from 'mobx';

export interface UiStore {
	isDrawerOpen: boolean;

	toggleDrawer(isOpen?: boolean | null): void;
}

const createUiStore = (): UiStore => {
	return makeAutoObservable<UiStore>({
		isDrawerOpen: false,

		toggleDrawer(isOpen = null) {
			this.isDrawerOpen = isOpen !== null ? isOpen : !this.isDrawerOpen;
		},
	});
};

// class UiStore {
// 	public isDrawerOpen = false;

// 	constructor() {
// 		makeAutoObservable(this);
// 	}

// 	public toggleDrawer = (isOpen: boolean | null = null): void => {
// 		this.isDrawerOpen = isOpen !== null ? isOpen : !this.isDrawerOpen;
// 	};
// }

export const uiStore = createUiStore();
