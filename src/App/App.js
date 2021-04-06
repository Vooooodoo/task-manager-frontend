/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// глобальный провайдер объекта theme из библиотеки Material UI,
// таким образом можно добавить кастомные переменные в этот объект или переопределить дефолтные
import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from '../routes/Router/Router';

import theme from './App.style';
import GlobalStyle from '../components/GlobalStyle/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
