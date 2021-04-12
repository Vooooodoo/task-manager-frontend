import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import * as boardsApi from '../../../../api/boardsApi';
import { setUserBoards } from '../../../../store/reducers/boards';

function BoardDeletePopup({
  id, delBoardId, isOpen, anchorEl, onClose,
}) {
  const boards = useSelector((state) => state.boards.userBoards);
  const dispatch = useDispatch();

  const deleteBoard = async (boardId) => {
    try {
      await boardsApi.removeBoard(boardId);

      const newBoards = boards.filter((board) => board.id !== boardId);

      dispatch(setUserBoards(newBoards));
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
      btnText="Delete board"
      onClose={onClose}
      onClick={() => deleteBoard(delBoardId)}
    />
  );
}

export default BoardDeletePopup;
