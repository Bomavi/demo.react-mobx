import { observable, action } from 'mobx';

export class GlobalStore {
	@observable public isLight: boolean = true;
	@action public switchTheme = (): void => {
		this.isLight = !this.isLight;
	};
}

export const globalStore = new GlobalStore();
