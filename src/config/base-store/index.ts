/* root imports: common */
import { Api } from 'config/api';
import { Services } from 'config/services';
import { API_URL, SERVICES_URL } from 'utils/constants';

export class BaseStore {
	public api = new Api(API_URL);
	public services = new Services(SERVICES_URL);
}
