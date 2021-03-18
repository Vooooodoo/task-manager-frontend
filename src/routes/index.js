import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import accountRoutes from './account';
import authRoutes from './auth';
import ProtectedRoute from '../components/ProtectedRoute';

const routes = [...accountRoutes, ...authRoutes];

function Router() {
  return (
    <Switch>
      {routes.map((rout, key) => (
        rout.isProtected
          ? <ProtectedRoute
              key={key}
              path={rout.path}
              component={rout.component}
            />
          : <Route
              key={key}
              path={rout.path}
              component={rout.component}
            />
      ))}
    </Switch>
  );
}

export default Router;
