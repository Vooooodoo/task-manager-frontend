import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import * as boardsApi from '../../../../api/boardsApi';
import { setBoard } from '../../../../store/reducers/boards';

function BoardNameEditPopup({
  id, isOpen, anchorEl, onClose,
}) {
  const routParams = useParams();
  const boardId = Number(routParams.id);

  const board = useSelector((state) => state.boards.board);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editBoardName = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      await boardsApi.updateBoardName(boardId, trimmedInputValue);

      const newBoard = { ...board, name: trimmedInputValue };

      dispatch(setBoard(newBoard));
      onClose();
      setInputValue('');
    }
  };

  return (
    <InputPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      placeholder="Edit board name"
      btnText="Edit Name"
      defaultValue={board.name}
      anchVertPos="bottom"
      anchHorPos="right"
      transVertPos={5}
      transHorPos={10}
      onChange={handleInputChange}
      onClick={editBoardName}
    />
  );
}

export default BoardNameEditPopup;
