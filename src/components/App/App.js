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
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(App);
