import createRouter, { Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';

import { routes } from './routes';
import { asyncMiddleware } from './middleware';
import { mobxRouterPlugin } from './plugins';

export interface RouterType extends Router {}

const router: RouterType = createRouter(routes, {
	allowNotFound: true,
});

router.usePlugin(browserPlugin(), mobxRouterPlugin);
router.useMiddleware(asyncMiddleware(routes));

export * from './filter';
export * from './helper';
export * from './store';

export default router;
