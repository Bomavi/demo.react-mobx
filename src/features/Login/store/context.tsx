import React, { createContext, useContext } from 'react';

import { createAuthStore, AuthStore } from './store';

const StoreContext = createContext<AuthStore | null>(null);

export const AuthStoreProvider: React.FC = ({ children }) => (
	<StoreContext.Provider value={createAuthStore()}>{children}</StoreContext.Provider>
);

export const useAuthStore = (): AuthStore => {
	const store = useContext(StoreContext);

	if (!store) {
		throw new Error('useAuthStore must be used within a AuthStoreProvider');
	}

	return store;
};
