import axiosInstance from './axiosInstance';

const createTask = async (columnId, text) => {
  const res = await axiosInstance
    .post('/tasks', {
      id: columnId,
      text,
    });

  return res;
};

const getColumnTasks = async (columnId) => {
  const res = await axiosInstance
    .get('/tasks', {
      params: { id: columnId },
    });

  return res;
};

const updateTaskText = async (id, text) => {
  const res = await axiosInstance.patch('/tasks', {
    id,
    text,
  });

  return res;
};

const removeTask = async (id) => {
  const res = await axiosInstance
    .delete('/tasks', {
      data: { id },
    });

  return res;
};

export {
  createTask,
  getColumnTasks,
  updateTaskText,
  removeTask,
};
