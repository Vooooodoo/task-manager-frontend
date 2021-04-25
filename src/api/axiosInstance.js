import axios from 'axios';
import * as config from '../config';

const jwt = localStorage.getItem(config.LOCAL_STORAGE_TOKEN_KEY);

const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 1000,
  headers: {
    //! можно ли отправлять Authorization для всех запросов в axiosInstance?
    Authorization: `Bearer ${jwt}`,
  },
});

export default axiosInstance;

// export const setToken = (token) => {
//   axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
// };
// axiosInstance.interceptors.request.use((request) => {
//   request.headers.Authorization = localStorage.getItem('jwt');
//   return request;
// });
// axiosInstance.interceptors.response.use(
//   ({ data }) => data,
//   (err) => {
//     throw err;
//   },
// );
