import { Api } from 'config/api';

export class BaseStore {
	public api = new Api(process.env.REACT_APP_API_BASE || '/api');
	public auth = new Api(process.env.REACT_APP_API_AUTH || '/auth');
}
