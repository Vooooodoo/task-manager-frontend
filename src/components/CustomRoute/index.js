/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// этот HOC принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function CustomRoute({ component: Component, ...props }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAuthRoute = props.path === '/sign-up' || props.path === '/sign-in';
  const isPublicRoute = isAuthRoute || props.path === '/';
  const privateComponent = isLoggedIn ? (
    <Component />
  ) : (
    <Redirect to="/sign-in" />
  );

  const createRoute = () => {
    if (isLoggedIn && isAuthRoute) {
      return <Redirect to="/main" />;
    }

    return isPublicRoute ? <Component /> : privateComponent;
  };

  return <Route {...props} render={createRoute} />;
}

export default CustomRoute;
