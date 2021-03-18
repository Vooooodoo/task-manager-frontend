import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import GlobalStyle from '../GlobalStyle';
import Router from '../../routes';
import Footer from '../Footer';
import Main from '../Main';

function App(props) {
  //! последний роут почему-то не редиректит при левом маршруте
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Router />
        <Route exact path="/">
          {props.isLoggedIn
            ? <Redirect to="/main" />
            : <Redirect to="/sign-in" />
          }
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(App);
