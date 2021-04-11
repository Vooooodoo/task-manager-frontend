import axiosInstance from './axiosInstance';

const updateUserInfo = async (firstName, lastName, about) => {
  const res = await axiosInstance.patch('/users/me', {
    firstName,
    lastName,
    about,
  });

  return res;
};

// eslint-disable-next-line import/prefer-default-export
export { updateUserInfo };
