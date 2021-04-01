import axios from 'axios';
import * as consts from './constants';

const instance = axios.create({
  baseURL: consts.BASE_URL,
  timeout: 1000,
  headers: {
    // 'Access-Control-Allow-Origin': consts.BASE_URL, //! узнать зачем это поле
    'Content-Type': 'application/json',
  },
});

export default instance;
