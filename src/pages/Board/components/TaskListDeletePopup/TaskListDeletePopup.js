import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setBoards } from '../../../../store/reducers/boards';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

function TaskListDeletePopup({
  id, delTaskListId, isOpen, anchorEl, onClose,
}) {
  const routParams = useParams();
  const boardId = Number(routParams.id);

  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const { columns } = board;
  const dispatch = useDispatch();

  const deleteTaskList = (taskListId) => {
    const newBoardColumns = columns.filter((item) => item.id !== taskListId);

    const newBoards = allBoards.map((item) => {
      if (item.id === boardId) {
        return { ...item, columns: newBoardColumns };
      }

      return item;
    });

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
