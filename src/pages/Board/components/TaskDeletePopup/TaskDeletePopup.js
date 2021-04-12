import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import * as tasksApi from '../../../../api/tasksApi';
import { setAllTasks } from '../../../../store/reducers/boards';

function TaskDeletePopup({
  id, delTaskId, isOpen, anchorEl, onClose,
}) {
  const tasks = useSelector((state) => state.tasks.allTasks);
  const dispatch = useDispatch();

  const deleteTask = async (taskId) => {
    try {
      await tasksApi.removeTask(taskId);

      const newTasks = tasks.filter((task) => task.id !== taskId);

      dispatch(setAllTasks(newTasks));
      onClose();
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <ConfirmPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      btnText="Delete card"
      onClose={onClose}
      onClick={() => deleteTask(delTaskId)}
    />
  );
}

export default TaskDeletePopup;
