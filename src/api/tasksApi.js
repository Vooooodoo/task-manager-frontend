import axios from './axios';

const createTask = async (columnId, name) => {
  const res = await axios
    .post('/tasks', {
      columnId,
      name,
    });

  return res;
};

const getTasks = async (columnId) => {
  const res = await axios
    .get('/tasks', {
      params: { columnId },
    });

  return res;
};

const removeTask = async (taskId) => {
  const res = await axios
    .delete('/tasks', {
      data: { taskId },
    });

  return res;
};

export { createTask, getTasks, removeTask };
