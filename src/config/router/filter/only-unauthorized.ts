/* npm imports: common */
import { State, Router } from 'router5';

/* root imports: common */
import { authStore } from 'features/Login/store';

export const onlyUnauthorized = (_router: Router) => (
	nextState: State,
	prevState: State,
	done: (data: { redirect: { name: string } }) => void
): boolean | void => {
	const { name: nextName } = nextState;
	const { isAuthenticated, isInitialized } = authStore;

	if (!prevState && nextName === 'login' && !isInitialized && !isAuthenticated) {
		return done({ redirect: { name: 'home' } });
	}

	return true;
};
