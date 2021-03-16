import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import routes from '../../routes';
import ProtectedRoute from '../ProtectedRoute';
import GlobalStyle from '../GlobalStyle';
import Footer from '../Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <ProtectedRoute
          exact path="/"
          component={Footer}
        />
        {routes.map(({ path, component }, key) => (
          <Route exact path={path} component={component} key={key} />
        ))}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
