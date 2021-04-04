import { FC } from 'react';
import { Route, RouteProps, useLocation, Redirect } from 'react-router';
import { observer } from 'mobx-react-lite';

import { useAuthStore } from 'pages/Login/store';

const AuthRoute: FC<RouteProps> = ({ children, ...restProps }) => {
	const location = useLocation();
	const { isAuthorized } = useAuthStore();

	if (isAuthorized && location.pathname === '/login') {
		return <Redirect to={{ pathname: '/', state: { from: location } }} />;
	}

	return <Route {...restProps}>{children}</Route>;
};

export default observer(AuthRoute);
