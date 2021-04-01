import axios from './api';

const signUp = (firstName, lastName, email, password) => axios
  .post('/signup', {
    headers: {
      Accept: 'application/json', //! узнать добавить ли он это поле к полям из инстанса или перезапишет
    },
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  })
  .then((res) => res);

const signIn = (email, password) => axios
  .post('/signup', {
    headers: {
      Accept: 'application/json',
    },
    data: {
      email,
      password,
    },
  })
  .then((res) => {
    if (res.token) {
      // eslint-disable-next-line no-undef
      localStorage.setItem('jwt', res.token);

      return res;
    }

    return res;
  });

// const checkJwt = (jwt) => {
// return fetch(`${BASE_URL}/users/me`, {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
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
// };

export { signUp, signIn };
