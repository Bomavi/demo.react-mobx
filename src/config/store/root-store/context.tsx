import React, { createContext, useContext } from 'react';

import { rootStore, TRootStore } from './store';

const RootStoreContext = createContext<TRootStore | null>(null);

export const RootStoreProvider: React.FC = ({ children }) => (
	<RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
);

export const useRootStore = (): TRootStore => {
	const rootStore = useContext(RootStoreContext);

	if (!rootStore) {
		throw new Error('useRootStore must be used within a RootStoreProvider');
	}

	return rootStore;
};
