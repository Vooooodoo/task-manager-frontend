import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import * as boardsApi from '../../../../api/boardsApi';
import { setAllBoards } from '../../../../store/reducers/boards';

function BoardCreatePopup({
  id, isOpen, anchorEl, onClose,
}) {
  const history = useHistory();
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createBoard = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      try {
        const newBoard = await boardsApi.createBoard(trimmedInputValue);

        const newBoards = [...boards, newBoard.data];

        dispatch(setAllBoards(newBoards));
        onClose();
        setInputValue('');
        history.push(`/boards/${newBoard.data.id}`);
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <InputPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      placeholder="Add board title"
      btnText="Create Board"
      onChange={handleInputChange}
      onClick={createBoard}
    />
  );
}

export default BoardCreatePopup;
