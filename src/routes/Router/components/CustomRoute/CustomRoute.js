/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// этот HOC принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function CustomRoute({ component: Component, ...props }) {
  const user = useSelector((state) => state.users.user);
  const isUser = Boolean(user.id);
  //! это проверять в роутере, там где объекты описывал, как изначально делал
  //! поле с булевым значением добавить
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

  //! Component дублируется, попробовать избавиться
  //! может передать в render его
  return <Route {...props} render={createRoute} />;
}

export default CustomRoute;
