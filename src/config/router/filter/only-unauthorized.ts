import { State, Router } from 'router5';

import { rootStore } from 'config/store';

export const onlyUnauthorized = (_router: Router) => (
	nextState: State,
	prevState: State,
	done: (data: { redirect: { name: string } }) => void
): boolean | void => {
	const { name: nextName } = nextState;
	const {
		featureAuth: { isAuthenticated, isInitialized },
	} = rootStore;

	if (!prevState && nextName === 'login' && !isInitialized && !isAuthenticated) {
		return done({ redirect: { name: 'home' } });
	}

	return true;
};
