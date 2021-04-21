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

const getBoard = async (boardId) => {
  const res = await axiosInstance.get(`/boards/${boardId}`);

  return res;
};

const updateBoardName = async (boardId, name) => {
  const res = await axiosInstance.patch(`/boards/${boardId}`, {
    name,
  });

  return res;
};

const updateBoardColumnsPos = async (id, columnsPos) => {
  const res = await axiosInstance.patch('/boards/columns-pos', {
    id,
    columnsPos,
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
  updateBoardColumnsPos,
  removeBoard,
};
