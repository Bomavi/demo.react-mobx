import React, { createContext, useContext } from 'react';

import { createHomeStore, HomeStore } from './store';

const StoreContext = createContext<HomeStore | null>(null);

export const HomeStoreProvider: React.FC = ({ children }) => (
	<StoreContext.Provider value={createHomeStore()}>{children}</StoreContext.Provider>
);

export const useHomeStore = (): HomeStore => {
	const store = useContext(StoreContext);

	if (!store) {
		throw new Error('useHomeStore must be used within a HomeStoreProvider');
	}

	return store;
};
