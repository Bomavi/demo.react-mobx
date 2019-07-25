import router, { RouterType } from 'config/router';

export class RouterHelper {
	public readonly navigate: RouterType['navigate'] = router.navigate;
}
