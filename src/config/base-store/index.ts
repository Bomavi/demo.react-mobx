import { Api } from 'config/api';

export class BaseStore {
	public api = new Api(process.env.API_BASE_PREFIX as string);
	public auth = new Api(process.env.API_AUTH_PREFIX as string);
}
