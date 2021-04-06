/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from '../routes/Router/Router';

import { checkJwt } from '../api/authApi';

import GlobalStyle from '../pages/GlobalStyle/GlobalStyle';

function App() {
  React.useEffect(() => {
    checkJwt();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
