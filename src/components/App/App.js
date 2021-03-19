import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from '../GlobalStyle';
import Router from '../../routes';
import Footer from '../Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Footer />
    </>
  );
}

export default App;
