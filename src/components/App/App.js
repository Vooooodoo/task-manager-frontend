import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import GlobalStyle from '../GlobalStyle';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Footer from '../Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <ProtectedRoute
          exact path="/"
          component={SignUp}
        />

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
