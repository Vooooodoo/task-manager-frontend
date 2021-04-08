import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setBoards } from '../../../../store/reducers/boards';
import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

function BoardDeletePopup({
  id, delBoardId, isOpen, anchorEl, onClose,
}) {
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const deleteBoard = (boardId) => {
    const newBoards = boards.filter((board) => board.id !== boardId);

    dispatch(setBoards(newBoards));
    onClose();
  };

  return (
    <ConfirmPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      btnText="Delete board"
      onClose={onClose}
      onClick={() => deleteBoard(delBoardId)}
    />
  );
}

export default BoardDeletePopup;
