/* root imports: common */
import { routerStore } from 'config/router/store';

const activate = (pageName: string): void => {
	const { setPageName } = routerStore;

	setPageName(pageName);
};

export const routes: CustomeRoute[] = [
	{
		name: 'home',
		path: '/',

		onActivate: (): void => activate('Home'),
		onDeactivate: (): void => console.error(0),
	},

	{
		name: 'login',
		path: '/login',

		onActivate: (): void => activate('Login'),
		onDeactivate: (): void => console.error(0),
	},
];
