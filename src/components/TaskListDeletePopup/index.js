import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBoards } from '../../store/boards';
import ConfirmPopup from '../ConfirmPopup';

function TaskListDeletePopup({
  id, delTaskListId, isOpen, anchorEl, onClose,
}) {
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const deleteTaskList = (taskListId) => {
    const newBoards = boards.filter((board) => board.id !== taskListId);

    dispatch(setBoards(newBoards));
    onClose();
  };

  return (
    <ConfirmPopup
      id={id}
      delElId={delTaskListId}
      isOpen={isOpen}
      anchorEl={anchorEl}
      btnText="Delete list"
      onClose={onClose}
      onClick={() => deleteTaskList(delTaskListId)}
    />
  );
}

export default TaskListDeletePopup;
