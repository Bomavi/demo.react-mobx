import { Router, State } from 'router5';

export const asyncMiddleware = (routes: CustomeRoute[]): any => (_router: Router): any => (
	nextState: State,
	_prevState: State,
	done: any
): void => {
	const route = routes.find((r: CustomeRoute): boolean => r.name === nextState.name);

	if (route && route.onActivate) route.onActivate(nextState.params);

	done();
};
