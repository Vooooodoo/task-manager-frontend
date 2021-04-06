/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './routes/Router/Router';

import { checkJwt } from './api/authApi';
import { setUser } from './store/reducers/users';

import GlobalStyle from './pages/GlobalStyle/GlobalStyle';

function App() {
  //! not perfect solution, because user may change often
  const user = useSelector((state) => state.users.authorizedUser);
  const dispatch = useDispatch();
  console.log(typeof String(user.id));

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      checkJwt()
        .then((res) => {
          if (res) {
            dispatch(setUser(res.data));
          } else {
            localStorage.removeItem('jwt');
          }
        })

        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен:', err);
        });
    }
  };

  React.useEffect(() => {
    checkToken();
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
