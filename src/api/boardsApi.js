import axios from './axios';

const createBoard = async (name) => {
  const res = await axios
    .post('/boards', {
      name,
    });

  return res;
};

const getBoards = async () => {
  const res = await axios.get('/boards');

  return res;
};

const updateBoardName = async (boardId, name) => {
  const res = await axios.patch('/boards', {
    boardId,
    name,
  });

  return res;
};

const removeBoard = async (boardId) => {
  const res = await axios
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
