import React from 'react';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Router from '../../routes';
import Footer from '../Footer';

function App() {
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
