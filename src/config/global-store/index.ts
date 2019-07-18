/* npm imports: common */
import { observable, computed, action } from 'mobx';

/* npm imports: material-ui/core */
import { Theme } from '@material-ui/core/styles';

/* root imports: common */
import { lightTheme, darkTheme } from 'utils/themes';

export class GlobalStore {
	@observable public isDark: boolean = false;
	@observable public isDrawerOpen: boolean = false;

	@computed public get themeNameToSwitch() {
		return this.isDark ? 'light' : 'dark';
	}

	@computed public get selectedTheme(): Theme {
		return this.isDark ? darkTheme : lightTheme;
	}

	@action public switchTheme = () => {
		this.isDark = !this.isDark;
	};

	@action public toggleDrawer = () => {
		this.isDrawerOpen = !this.isDrawerOpen;
	};
}

export const globalStore = new GlobalStore();
