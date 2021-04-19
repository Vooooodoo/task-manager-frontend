import axiosInstance from './axiosInstance';

const getAllUsers = async () => {
  const res = await axiosInstance.get('/users');

  return res;
};

const updateUserInfo = async (firstName, lastName, about) => {
  const res = await axiosInstance.patch('/users/me', {
    firstName,
    lastName,
    about,
  });

  return res;
};

const setUserAvatar = async (avatar) => {
  const res = await axiosInstance.patch('/users/me/avatar', {
    avatar,
  });

  return res;
};

export { getAllUsers, updateUserInfo, setUserAvatar };
