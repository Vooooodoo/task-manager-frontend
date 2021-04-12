/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './routes/Router/Router';

import { checkJwt } from './api/authApi';
import { setUser } from './store/reducers/users';

import { LOCAL_STORAGE_TOKEN_KEY } from './config';

import GlobalStyle from './pages/GlobalStyle/GlobalStyle';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  //! where to replace token checker?
  const checkToken = async () => {
    setIsLoading(true);

    try {
      const res = await checkJwt();

      if (res.data) {
        dispatch(setUser(res.data));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      }
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
