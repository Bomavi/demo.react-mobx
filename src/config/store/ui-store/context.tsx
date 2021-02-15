import React, { createContext, useContext } from 'react';

import { uiStore, UiStore } from './store';

const UiStoreContext = createContext<UiStore | null>(null);

export const UiStoreProvider: React.FC = ({ children }) => (
	<UiStoreContext.Provider value={uiStore}>{children}</UiStoreContext.Provider>
);

export const useUiStore = (): UiStore => {
	const uiStore = useContext(UiStoreContext);

	if (!uiStore) {
		throw new Error('useUiStore must be used within a UiStoreProvider');
	}

	return uiStore;
};
