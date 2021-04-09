import axios from './axios';

const createColumn = async (name) => {
  const res = await axios
    .post('/columns', {
      name,
    });

  return res;
};

const getColumns = async () => {
  const res = await axios.get('/columns');

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
