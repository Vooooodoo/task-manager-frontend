import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// этот HOC принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {
        () => (props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />)
      }
    </Route>
  );
}

export default ProtectedRoute;

// будет единый компонент ProtectedRoute а уже внутри него описать логику редиректа и рендера
// кокрентный роут можно не хардкодить, а указать в качестве пропса, куда редиректить,
// тем самы можно будет убрать поле isProtected из объекта с роутами
