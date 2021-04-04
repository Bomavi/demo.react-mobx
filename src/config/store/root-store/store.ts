import { makeAutoObservable } from 'mobx';

import { Services } from 'config/services';

import { homeStore, HomeStore } from 'pages/Home/store';
import { authStore, AuthStore } from 'pages/Login/store';

interface RootStore {
	services: Services;
	// featureHome: HomeStore;
	// featureAuth: AuthStore;
}

const createRootStore = (): RootStore => {
	return makeAutoObservable<RootStore>(
		{
			services: new Services(),
			// featureHome: createHomeStore(this),
			// featureAuth: createAuthStore(this),
		},
		{
			services: false,
			// featureHome: false,
			// featureAuth: false,
		}
	);
};

// class RootStore {
// 	public readonly services;
// 	public readonly featureHome;
// 	public readonly featureAuth;

// 	constructor() {
// 		this.services = new Services();
// 		this.featureHome = createHomeStore(this);
// 		this.featureAuth = createAuthStore(this);
// 	}
// }

export const rootStore = createRootStore();

export type TRootStore = RootStore;
