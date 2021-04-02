import axios from 'axios';
import * as consts from './constants';

// eslint-disable-next-line no-undef
const jwt = localStorage.getItem('jwt');
const instance = axios.create({
  baseURL: consts.BASE_URL,
  timeout: 1000,
  headers: {
    //! можно ли отправлять Authorization для всех запросов?
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  },
});

export default instance;
