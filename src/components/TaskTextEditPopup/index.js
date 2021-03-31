import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBoards } from '../../store/boards';
import InputPopup from '../InputPopup';

function TaskTextEditPopup({
  id, taskId, taskListId, isOpen, anchorEl, onClose,
}) {
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const boardColumns = board.columns;
  const taskList = boardColumns.find((item) => item.id === taskListId);
  const task = taskList.items.find((item) => item.id === taskId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editTaskText = (editTaskId, listId) => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newTaskList = taskList.items.map((item) => {
        if (item.id === editTaskId) {
          return { ...item, text: trimmedInputValue };
        }

        return item;
      });

      const newBoardColumns = boardColumns.map((item) => {
        if (item.id === listId) {
          return { ...item, items: newTaskList };
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
      inputName="taskName"
      placeholder="Edit task text"
      btnText="Edit Text"
      defaultValue={task.text}
      onChange={handleInputChange}
      onClick={() => editTaskText(taskId, taskListId)}
    />
  );
}

export default TaskTextEditPopup;
