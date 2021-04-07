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
  try {
    const res = await axios.get('/users/me');

    if (res.status === 200) {
      return res;
    }
    if (res.status === 400) {
      throw new Error('The token was not sent or was sent in the wrong format.');
    }
    if (res.status === 401) {
      throw new Error('Invalid token.');
    }

    return res;
  } catch (err) {
    return err;
  }
};

export { signUp, signIn, checkJwt };
