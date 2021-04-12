import axiosInstance from './axiosInstance';

const createBoard = async (name) => {
  const res = await axiosInstance
    .post('/boards', {
      name,
    });

  return res;
};

const getUserBoards = async () => {
  const res = await axiosInstance.get('/boards');

  return res;
};

//! add id params
const getBoard = async () => {
  const res = await axiosInstance.get('/boards');

  return res;
};

const updateBoardName = async (id, name) => {
  const res = await axiosInstance.patch('/boards', {
    id,
    name,
  });

  return res;
};

const removeBoard = async (id) => {
  const res = await axiosInstance
    .delete('/boards', {
      data: { id },
    });

  return res;
};

export {
  createBoard,
  getUserBoards,
  getBoard,
  updateBoardName,
  removeBoard,
};
