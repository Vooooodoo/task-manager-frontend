import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBoards } from '../../store/boards';
import InputPopup from '../InputPopup';

function BoardCreatePopup({
  id, isOpen, anchorEl, onClose,
}) {
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createBoard = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const boardId = Date.now();
      const newBoard = {
        id: boardId,
        name: trimmedInputValue,
        columns: [],
      };
      const newBoards = [newBoard, ...boards];

      dispatch(setBoards(newBoards));
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
      placeholder="Add board title"
      btnText="Create Board"
      onChange={handleInputChange}
      onClick={createBoard}
    />
  );
}

export default BoardCreatePopup;
