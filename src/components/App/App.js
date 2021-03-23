import React from 'react';
// глобальный провайдер стокового объекта theme из библиотеки Material UI,
// таким образом можно добавить кастомные переменные в этот объект или переопределить стоковые
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Router from '../../routes';
import Footer from '../Footer';

const theme = createMuiTheme({
  whiteColor: 'red',
});

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
