import { FC } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';

import { useAuthStore } from 'pages/Login/store';

const PrivateRoute: FC<RouteProps> = ({ children, ...restProps }) => {
  const location = useLocation();
  const { isAuthorized } = useAuthStore();

  if (!isAuthorized) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <Route {...restProps}>{children}</Route>;
};

export default observer(PrivateRoute);
