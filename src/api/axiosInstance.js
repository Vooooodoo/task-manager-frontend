import axios from 'axios';
import * as config from '../config';

const jwt = localStorage.getItem(config.LOCAL_STORAGE_TOKEN_KEY);

const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});

export default axiosInstance;
