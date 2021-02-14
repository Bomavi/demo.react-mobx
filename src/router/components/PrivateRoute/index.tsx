import { FC } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';

import { useRootStore } from 'config/store';

const PrivateRoute: FC<RouteProps> = observer(({ children, ...restProps }) => {
	const location = useLocation();

	const {
		featureAuth: { isAuthenticated, isInitialized },
	} = useRootStore();

	const isAuthorized = !isInitialized || isAuthenticated;

	return (
		<Route {...restProps}>
			{isAuthorized ? (
				children
			) : (
				<Redirect to={{ pathname: '/login', state: { from: location } }} />
			)}
		</Route>
	);
});

export { PrivateRoute };
