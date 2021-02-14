import { FC } from 'react';
import { Router as RouterProvider, Switch, Route } from 'react-router';

import { Home } from 'features/Home';
import { Login } from 'features/Login';

import { history } from './config/history';
import { PrivateRoute } from './components/PrivateRoute';

const Router: FC = () => {
	return (
		<RouterProvider history={history}>
			<Switch>
				<PrivateRoute exact path="/">
					<Home />
				</PrivateRoute>
				<Route exact path="/login">
					<Login />
				</Route>
			</Switch>
		</RouterProvider>
	);
};

export { Router };
