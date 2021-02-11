import React, { createContext, useContext } from 'react';

import { RouterStore } from './store';

const RouterStoreContext = createContext<RouterStore | null>(null);

export const RouterStoreProvider: React.FC = ({ children }) => (
	<RouterStoreContext.Provider value={new RouterStore()}>
		{children}
	</RouterStoreContext.Provider>
);

export const useRouterStore = (): RouterStore => {
	const routerStore = useContext(RouterStoreContext);

	if (!routerStore) {
		throw new Error('useRouterStore must be used within a RouterStoreProvider');
	}

	return routerStore;
};
