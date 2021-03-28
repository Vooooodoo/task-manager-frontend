import React from 'react';
// глобальный провайдер объекта theme из библиотеки Material UI,
// таким образом можно добавить кастомные переменные в этот объект или переопределить дефолтные
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './style';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Router from '../../routes';
import Footer from '../Footer';

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
