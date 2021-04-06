import axios from 'axios';
import * as constants from '../utils/constants';

// eslint-disable-next-line no-undef
const jwt = localStorage.getItem('jwt');
const axiosInstance = axios.create({
  baseURL: constants.BASE_URL,
  timeout: 1000,
  headers: {
    //! можно ли отправлять Authorization для всех запросов?
    Authorization: `Bearer ${jwt}`,
  },
});

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

export default axiosInstance;
