import { FC } from 'react';
import { Route, RouteProps } from 'react-router';

const PublicRoute: FC<RouteProps> = ({ children, ...restProps }) => {
  return <Route {...restProps}>{children}</Route>;
};

export default PublicRoute;
