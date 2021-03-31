import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBoards } from '../../store/boards';
import InputPopup from '../InputPopup';

function TaskListNameEditPopup({
  id, taskListId, isOpen, anchorEl, onClose,
}) {
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const boardColumns = board.columns;
  const taskList = boardColumns.find((item) => item.id === taskListId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editTaskListName = (listId) => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newBoardColumns = boardColumns.map((item) => {
        if (item.id === listId) {
          return { ...item, name: trimmedInputValue };
        }

        return item;
      });

      const newBoards = allBoards.map((item) => {
        if (item.id === boardId) {
          return { ...item, columns: newBoardColumns };
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
      inputName="taskListName"
      placeholder="Edit list name"
      btnText="Edit Name"
      defaultValue={taskList.name}
      onChange={handleInputChange}
      onClick={() => editTaskListName(taskListId)}
    />
  );
}

export default TaskListNameEditPopup;
