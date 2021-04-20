/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CustomRoute({ component: Component, ...props }) {
  const user = useSelector((state) => state.users.user);
  const isUser = Boolean(user.id);
  const isAuthRoute = props.path === '/sign-up' || props.path === '/sign-in';
  const isPublicRoute = isAuthRoute || props.path === '/';
  const privateComponent = isUser ? (
    <Component />
  ) : (
    <Redirect to="/sign-in" />
  );

  const createRoute = () => {
    if (isUser && isAuthRoute) {
      return <Redirect to="/main" />;
    }

    return isPublicRoute ? <Component /> : privateComponent;
  };

  return <Route {...props} render={createRoute} />;
}

export default CustomRoute;
