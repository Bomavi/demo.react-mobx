import { State, Router } from 'router5';

import { rootStore } from 'config/store';

export const onlyAuthorized = (_router: Router) => (
	nextState: State,
	_prevState: State,
	done: (data: { redirect: { name: string } }) => void
): boolean | void => {
	const { name: nextName } = nextState;
	const {
		featureAuth: { isAuthenticated, isInitialized },
	} = rootStore;

	const acceptable = !isAuthenticated && nextName === 'login';

	if (!isInitialized || isAuthenticated || acceptable) return true;

	done({ redirect: { name: 'login' } });
};
