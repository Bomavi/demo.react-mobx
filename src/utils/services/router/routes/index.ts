import { routerStore } from './../store';

const activate = (pageName: string): void => {
    const { setPageName } = routerStore;

    setPageName(pageName);
};

export const routes: CustomeRoute[] = [
    {
        name: 'home',
        path: '/',

        onActivate: (): void => activate('Home'),
        onDeactivate: (): void => console.log(0),
    },

    {
        name: 'about',
        path: '/about',

        onActivate: (): void => activate('About'),
        onDeactivate: (): void => console.log(0),
    },
];
