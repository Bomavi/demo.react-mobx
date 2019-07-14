import createRouter, { Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';

import { routes } from './routes';
import { asyncMiddleware } from './middleware';
import { mobxRouterPlugin } from './plugins';

const router: Router = createRouter(routes, {
    allowNotFound: true,
});

router.usePlugin(browserPlugin(), mobxRouterPlugin);
router.useMiddleware(asyncMiddleware(routes));

export default router;

export * from './filter';
export * from './store';
