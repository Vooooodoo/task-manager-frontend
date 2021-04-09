import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import { setAllBoards } from '../../../../store/reducers/boards';

function BoardDeletePopup({
  id, delBoardId, isOpen, anchorEl, onClose,
}) {
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const deleteBoard = (boardId) => {
    const newBoards = boards.filter((board) => board.id !== boardId);

    dispatch(setAllBoards(newBoards));
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
