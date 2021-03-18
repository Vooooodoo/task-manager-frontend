import React from 'react';
import { Switch } from 'react-router-dom';
import accountRoutes from './account';
import authRoutes from './auth';
import CustomRoute from '../components/ProtectedRoute';

const routes = [...accountRoutes, ...authRoutes];

function Router() {
  return (
    <Switch>
      {routes.map((rout, key) => (
        <CustomRoute
          key={key}
          path={rout.path}
          component={rout.component}
        />
      ))}
    </Switch>
  );
}

export default Router;
