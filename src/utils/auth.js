import axios from './api';

const signUp = (firstName, lastName, email, password) => axios
  .post('/sign-up', {
    firstName,
    lastName,
    email,
    password,
  });

const signIn = async (email, password) => {
  const res = await axios
    .post('/sign-in', {
      email,
      password,
    });
  const jwt = res.data.token;

  if (jwt) {
    // eslint-disable-next-line no-undef
    localStorage.setItem('jwt', jwt);

    return res;
  }

  return res;
};

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
