import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import { setAllColumns } from '../../../../store/reducers/columns';

function TaskListDeletePopup({
  id, delTaskListId, isOpen, anchorEl, onClose,
}) {
  const columns = useSelector((state) => state.columns.allColumns);
  const dispatch = useDispatch();

  const deleteTaskList = (taskListId) => {
    const newColumns = columns.filter((board) => board.id !== taskListId);

    dispatch(setAllColumns(newColumns));
    onClose();
  };

  return (
    <ConfirmPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      btnText="Delete list"
      onClose={onClose}
      onClick={() => deleteTaskList(delTaskListId)}
    />
  );
}

export default TaskListDeletePopup;
