/* npm imports: common */
import { Router, State } from 'router5';

export const asyncMiddleware = (routes: CustomeRoute[]) => (_router: Router) => (
	nextState: State,
	_prevState: State,
	done: () => void
): void => {
	const route = routes.find((r: CustomeRoute): boolean => r.name === nextState.name);
	if (route && route.onActivate) route.onActivate(nextState.params);
	done();
};
