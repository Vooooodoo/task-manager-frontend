import axiosInstance from './axiosInstance';

const createTask = async (columnId, name) => {
  const res = await axiosInstance
    .post('/tasks', {
      columnId,
      name,
    });

  return res;
};

const getTasks = async (columnId) => {
  const res = await axiosInstance
    .get('/tasks', {
      params: { columnId },
    });

  return res;
};

const updateTaskText = async (taskId, text) => {
  const res = await axiosInstance.patch('/tasks', {
    taskId,
    text,
  });

  return res;
};

const removeTask = async (taskId) => {
  const res = await axiosInstance
    .delete('/tasks', {
      data: { taskId },
    });

  return res;
};

export {
  createTask,
  getTasks,
  updateTaskText,
  removeTask,
};
