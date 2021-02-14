import { createContext, useContext, FC } from 'react';

import { routerStore, TRouterStore } from './store';

const RouterStoreContext = createContext<TRouterStore | null>(null);

export const RouterStoreProvider: FC = ({ children }) => (
	<RouterStoreContext.Provider value={routerStore}>
		{children}
	</RouterStoreContext.Provider>
);

export const useRouterStore = (): TRouterStore => {
	const routerStore = useContext(RouterStoreContext);

	if (!routerStore) {
		throw new Error('useRouterStore must be used within a RouterStoreProvider');
	}

	return routerStore;
};
