import axiosInstance from './axiosInstance';

const createColumn = async (boardId, name) => {
  const res = await axiosInstance.post('/columns', {
    id: boardId,
    name,
  });

  return res;
};

const getBoardColumns = async (boardId) => {
  const res = await axiosInstance.get('/columns', {
    params: { id: boardId },
  });

  return res;
};

const updateColumnName = async (id, name) => {
  const res = await axiosInstance.patch('/columns', {
    id,
    name,
  });

  return res;
};

const updateColumnTasksOrder = async (id, tasksOrder) => {
  const res = await axiosInstance.patch('/columns/tasks-pos', {
    id,
    tasksOrder,
  });

  return res;
};

const removeColumn = async (id) => {
  const res = await axiosInstance.delete('/columns', {
    data: { id },
  });

  return res;
};

export {
  createColumn,
  getBoardColumns,
  updateColumnName,
  updateColumnTasksOrder,
  removeColumn,
};
