import axios from './axios';
import { LOCAL_STORAGE_TOKEN_KEY } from '../config';

const setJwtToLocalStorage = (res) => {
  const jwt = res.data.token;

  if (jwt) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, jwt);

    return res;
  }

  return res;
};

const signUp = async (firstName, lastName, email, password) => {
  const res = await axios
    .post('/sign-up', {
      firstName,
      lastName,
      email,
      password,
    });

  setJwtToLocalStorage(res);

  return res;
};

const signIn = async (email, password) => {
  const res = await axios
    .post('/sign-in', {
      email,
      password,
    });

  setJwtToLocalStorage(res);

  return res;
};

const checkJwt = async () => {
  const res = await axios.get('/users/me');

  return res;

  // return fetch(`${BASE_URL}/users/me`, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${jwt}`,
  //   },
  // })
  //   .then((res) => {
  //     try {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //       if (res.status === 400) {
  //         throw new Error('Токен не передан или передан не в том формате');
  //       }
  //       if (res.status === 401) {
  //         throw new Error('Переданный токен некорректен');
  //       }
  //     } catch (error) {
  //       return error;
  //     }
  //   })

  //   .then((data) => data);
};

export { signUp, signIn, checkJwt };
