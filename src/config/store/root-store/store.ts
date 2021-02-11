import { Services } from 'config/services';

import { HomeStore } from 'features/Home/store';
import { AuthStore } from 'features/Login/store';

export class RootStore {
	public readonly services;
	public readonly featureHome;
	public readonly featureAuth;

	constructor() {
		this.services = new Services();
		this.featureHome = new HomeStore(this);
		this.featureAuth = new AuthStore(this);
	}
}
