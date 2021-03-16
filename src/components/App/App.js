import React from 'react';
import { Switch } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle';
import Router from '../../routes';
import Footer from '../Footer';

function App() {
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

export default App;
