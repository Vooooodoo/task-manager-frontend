import axiosInstance from './axiosInstance';

const createColumn = async (boardId, name) => {
  const res = await axiosInstance
    .post('/columns', {
      boardId,
      name,
    });

  return res;
};

const getColumns = async (boardId) => {
  const res = await axiosInstance
    .get('/columns', {
      params: { boardId },
    });

  return res;
};

const updateColumnName = async (columnId, name) => {
  const res = await axiosInstance.patch('/columns', {
    columnId,
    name,
  });

  return res;
};

const removeColumn = async (columnId) => {
  const res = await axiosInstance
    .delete('/columns', {
      data: { columnId },
    });

  return res;
};

export {
  createColumn,
  getColumns,
  updateColumnName,
  removeColumn,
};
