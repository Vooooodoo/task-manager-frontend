import axiosInstance from './axiosInstance';

const createBoard = async (name) => {
  const res = await axiosInstance
    .post('/boards', {
      name,
    });

  return res;
};

const getBoards = async () => {
  const res = await axiosInstance.get('/boards');

  return res;
};

const updateBoardName = async (boardId, name) => {
  const res = await axiosInstance.patch('/boards', {
    boardId,
    name,
  });

  return res;
};

const removeBoard = async (boardId) => {
  const res = await axiosInstance
    .delete('/boards', {
      data: { boardId },
    });

  return res;
};

export {
  createBoard,
  getBoards,
  updateBoardName,
  removeBoard,
};
