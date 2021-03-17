import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// этот HOC принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function ProtectedRoute({ component: Component, ...props }) {
  // const isProtectedComponent = props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
  // const isAuth = props.path === '/sign-up' || props.path === '/sign-in';

  // const createRoute = () => {
  //   if (isAuth) {
  //     return <Route path={props.path} component={props.component} />
  //   } else {
  //     return isProtectedComponent;
  //   }
  // }

  return (
    <Route>
      { () => (props.isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />) }
    </Route>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);


// будет единый компонент ProtectedRoute а уже внутри него описать логику редиректа и рендера
// кокрентный роут можно не хардкодить, а указать в качестве пропса, куда редиректить,
// тем самы можно будет убрать поле isProtected из объекта с роутами
// всю логику можно выше поднять перед return и там уже возвращать, либо компонент, либо редирект и т.п.
