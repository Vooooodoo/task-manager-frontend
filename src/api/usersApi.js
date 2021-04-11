import axios from './axios';

const updateUserInfo = async (firstName, lastName, about) => {
  const res = await axios.patch('/users/me', {
    firstName,
    lastName,
    about,
  });

  return res;
};

// eslint-disable-next-line import/prefer-default-export
export { updateUserInfo };
