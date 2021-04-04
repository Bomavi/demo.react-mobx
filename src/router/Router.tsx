import { FC } from 'react';
import { Router as BrowserRouter, Switch } from 'react-router';

import Home from 'pages/Home';
import Login from 'pages/Login';

import { history } from './config/history';
import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';

const Router: FC = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <AuthRoute exact path="/login">
          <Login />
        </AuthRoute>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
