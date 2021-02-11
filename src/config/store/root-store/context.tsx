import React, { createContext, useContext } from 'react';

import { RootStore } from './store';

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider: React.FC = ({ children }) => (
	<RootStoreContext.Provider value={new RootStore()}>
		{children}
	</RootStoreContext.Provider>
);

export const useRootStore = (): RootStore => {
	const rootStore = useContext(RootStoreContext);

	if (!rootStore) {
		throw new Error('useRootStore must be used within a RootStoreProvider');
	}

	return rootStore;
};
