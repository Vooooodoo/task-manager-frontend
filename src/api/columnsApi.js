import axios from './axios';

const createColumn = async (id, name) => {
  const res = await axios
    .post('/columns', {
      id,
      name,
    });

  return res;
};

const getColumns = async (id) => {
  const res = await axios
    .get('/columns', {
      params: { id },
    });

  return res;
};

const removeColumn = async (id) => {
  const res = await axios
    .delete('/columns', {
      data: { id },
    });

  return res;
};

export { createColumn, getColumns, removeColumn };
