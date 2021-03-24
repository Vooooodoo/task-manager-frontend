import React from 'react';
// глобальный провайдер объекта theme из библиотеки Material UI,
// таким образом можно добавить кастомные переменные в этот объект или переопределить дефолтные
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Router from '../../routes';
import Footer from '../Footer';

// добавим кастомную переменную в глобальный объект theme
const theme = createMuiTheme({
  mainContainerMarginTop: '64px',
  customHover: {
    cursor: 'pointer',
    opacity: '.8',
  },
  customTransition: '.2s linear',
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
