import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setBoards } from '../../../../store/reducers/boards';
import InputPopup from '../../../../components/InputPopup/InputPopup';

function TaskListCreatePopup({
  id, isOpen, anchorEl, onClose,
}) {
  const routParams = useParams();
  const boardId = Number(routParams.id);

  const allBoards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createTaskList = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newBoards = allBoards.map((board) => {
        if (board.id === boardId) {
          const taskListId = Date.now();
          const newTaskList = {
            id: taskListId,
            name: trimmedInputValue,
            items: [],
          };
          const newBoardColumns = [...board.columns, newTaskList];

          return { ...board, columns: newBoardColumns };
        }

        return board;
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
      placeholder="Enter list title..."
      btnText="Add List"
      onChange={handleInputChange}
      onClick={createTaskList}
    />
  );
}

export default TaskListCreatePopup;
