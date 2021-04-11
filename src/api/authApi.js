import axiosInstance from './axiosInstance';
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
  const res = await axiosInstance
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
  const res = await axiosInstance
    .post('/sign-in', {
      email,
      password,
    });

  setJwtToLocalStorage(res);

  return res;
};

const checkJwt = async () => {
  const res = await axiosInstance.get('/users/me');

  return res;
};

export { signUp, signIn, checkJwt };
