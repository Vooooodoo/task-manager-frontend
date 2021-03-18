import React from 'react';
import { Route } from 'react-router-dom';
import accountRoutes from './account';
import authRoutes from './auth';
import ProtectedRoute from '../components/ProtectedRoute';

function Router() {
  const routes = [...accountRoutes, ...authRoutes];

  //! свитч почему то не воспринимает компонент ProtectedRoute
  //! и рендерит не один при совпадении роута, а сразу два
  return (
    <>
      {routes.map((prop, key) => (
        prop.isProtected
          ? <ProtectedRoute
              key={key}
              path={prop.path}
              component={prop.component}
            />
          : <Route
              key={key}
              path={prop.path}
              component={prop.component}
            />
      ))}
    </>
  );
}

export default Router;
