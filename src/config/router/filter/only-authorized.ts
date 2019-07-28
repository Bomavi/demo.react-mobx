/* npm imports: common */
import { State, Router } from 'router5';

/* root imports: common */
import { authStore } from 'features/Login/store';

export const onlyAuthorized = (_router: Router) => (
	nextState: State,
	_prevState: State,
	done: Function
) => {
	const { name: nextName } = nextState;
	const { isAuthenticated, isInitialized } = authStore;

	const acceptable = !isAuthenticated && nextName === 'login';

	if (!isInitialized || isAuthenticated || acceptable) return true;

	done({ redirect: { name: 'login' } });
};
