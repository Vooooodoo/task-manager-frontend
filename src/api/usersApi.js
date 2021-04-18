import axiosInstance from './axiosInstance';

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

export { updateUserInfo, setUserAvatar };
