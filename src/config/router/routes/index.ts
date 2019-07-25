/* root imports: common */
import { routerStore } from 'config/router/store';
import { onlyAuthorized, onlyUnauthorized } from 'config/router/filter';

const activate = (pageName: string) => {
	const { setPageName } = routerStore;

	setPageName(pageName);
};

export const routes: CustomeRoute[] = [
	{
		name: 'home',
		path: '/',

		canActivate: onlyAuthorized,

		onActivate: () => activate('Home'),
		onDeactivate: () => console.error(0),
	},

	{
		name: 'login',
		path: '/login',

		canActivate: onlyUnauthorized,

		onActivate: () => activate('Login'),
		onDeactivate: () => console.error(0),
	},
];
