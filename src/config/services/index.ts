/* root imports: common */
import { ApiClient } from 'config/axios/api-client';

/* local imports: common */
import { AuthService } from './auth';

export class Services {
	public auth: AuthService;

	public constructor(apiPrefix: string) {
		if (!apiPrefix) {
			throw new Error('[apiPrefix] required');
		}

		this.auth = new AuthService(new ApiClient({ apiPrefix: `${apiPrefix}/auth` }));
	}
}
