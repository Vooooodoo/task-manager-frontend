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

const removeBoard = async (id) => {
  const res = await axios
    .delete('/boards', {
      data: { id },
    });

  return res;
};

export { createBoard, getBoards, removeBoard };
