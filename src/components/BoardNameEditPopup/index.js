import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBoards } from '../../store/boards';
import InputPopup from '../InputPopup';

function BoardNameEditPopup({
  id, isOpen, anchorEl, onClose,
}) {
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editBoardName = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newBoards = allBoards.map((item) => {
        if (item.id === boardId) {
          // не мутируем объект внутри массива, а возвращаем новый
          return { ...item, name: trimmedInputValue };
        }

        return item;
      });

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
