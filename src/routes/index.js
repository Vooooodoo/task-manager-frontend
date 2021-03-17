import React from 'react';
import { Route } from 'react-router-dom';
import mainRoutes from './main';
import authRoutes from './auth';
import notFoundRoute from './notFound';
import ProtectedRoute from '../components/ProtectedRoute';

function Router() {
  const routes = [...mainRoutes, ...authRoutes, ...notFoundRoute];

  return (
    <>
      {routes.map(({ path, component, isProtected }, key) => (
        isProtected
        ? <ProtectedRoute
            key={key}
            exact path={path}
            component={component}
          />
        : <Route
            key={key}
            path={path}
            component={component}
          />
      ))}
    </>
  );
}

export default Router;



// тут возвращать уже все отмапленные компоненты и вставлять этот компонент уже в App,
// т.е. в этом файле будет компонент который возвращает фрагмент внутри которого результат мэпа,
// а объекты разбить на файлы в зависимости от функционала и импортировать их сюда,
// итого будет несколько объектов auth, main и т.п.


