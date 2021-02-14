import router, { RouterType } from 'config/router';

class RouterHelper {
	public readonly navigate: typeof router['navigate'];

	constructor() {
		this.navigate = router.navigate;
	}
}

export const routerHelper = new RouterHelper();

export type TRouterHelper = RouterHelper;
