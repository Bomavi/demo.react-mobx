import React, { createContext, useContext } from 'react';

import { UiStore } from './store';

const UiStoreContext = createContext<UiStore | null>(null);

export const UiStoreProvider: React.FC = ({ children }) => (
	<UiStoreContext.Provider value={new UiStore()}>{children}</UiStoreContext.Provider>
);

export const useUiStore = (): UiStore => {
	const uiStore = useContext(UiStoreContext);

	if (!uiStore) {
		throw new Error('useUiStore must be used within a UiStoreProvider');
	}

	return uiStore;
};
