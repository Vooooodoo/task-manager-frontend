import axiosInstance from './axiosInstance';

const createTask = async (columnId, name) => {
  const res = await axiosInstance
    .post('/tasks', {
      id: columnId,
      name,
    });

  return res;
};

const getTasks = async (columnId) => {
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
  getTasks,
  updateTaskText,
  removeTask,
};
