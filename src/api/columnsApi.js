import axios from './axios';

const createColumn = async (boardId, name) => {
  const res = await axios
    .post('/columns', {
      boardId,
      name,
    });

  return res;
};

const getColumns = async (boardId) => {
  const res = await axios
    .get('/columns', {
      params: { boardId },
    });

  return res;
};

const removeColumn = async (columnId) => {
  const res = await axios
    .delete('/columns', {
      data: { columnId },
    });

  return res;
};

export { createColumn, getColumns, removeColumn };
