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

const updateUserAvatar = async (avatar) => {
  const res = await axiosInstance.patch('/users/me/avatar', avatar);

  return res;
};

const updateUserRoleId = async (id, roleId) => {
  const res = await axiosInstance.patch('/users', {
    id,
    roleId,
  });

  return res;
};

const removeUser = async (id) => {
  const res = await axiosInstance.delete('/users', {
    data: {
      id,
    },
  });

  return res;
};

export {
  getAllUsers,
  updateUserInfo,
  updateUserAvatar,
  updateUserRoleId,
  removeUser,
};
