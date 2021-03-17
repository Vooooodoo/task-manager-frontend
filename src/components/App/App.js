import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import GlobalStyle from '../GlobalStyle';
import Router from '../../routes';
import Footer from '../Footer';

function App(props) {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Router />
        <Route path="*">
          {props.isLoggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
        </Route>
        //! добавить редирект на главную если loggedIn === true
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(App);
