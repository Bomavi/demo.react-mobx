import { createContext, FC, useContext } from 'react';

import { homeStore, HomeStore } from './store';

const StoreContext = createContext<HomeStore | null>(null);

export const HomeStoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={homeStore}>{children}</StoreContext.Provider>
);

export const useHomeStore = (): HomeStore => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useHomeStore must be used within a HomeStoreProvider');
  }

  return store;
};
