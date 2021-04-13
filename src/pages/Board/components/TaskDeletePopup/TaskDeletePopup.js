import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import * as tasksApi from '../../../../api/tasksApi';
import { setBoardColumns } from '../../../../store/reducers/boards';

function TaskDeletePopup({
  id, columnId, delTaskId, isOpen, anchorEl, onClose,
}) {
  const dispatch = useDispatch();

  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const currentColumn = boardColumns.find((item) => item.id === columnId);
  const columnTasks = currentColumn.Tasks;

  const deleteTask = async () => {
    try {
      await tasksApi.removeTask(delTaskId);

      const newTasks = columnTasks.filter((task) => task.id !== delTaskId);

      const newColumns = boardColumns.map((item) => {
        if (item.id === columnId) {
          return { ...item, Tasks: newTasks };
        }

        return item;
      });

      dispatch(setBoardColumns(newColumns));
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
      onClick={deleteTask}
    />
  );
}

export default TaskDeletePopup;
