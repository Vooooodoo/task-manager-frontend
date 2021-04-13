import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import * as tasksApi from '../../../../api/tasksApi';
import { setBoardColumns } from '../../../../store/reducers/boards';

function TaskTextEditPopup({
  id, columnId, taskId, isOpen, anchorEl, onClose,
}) {
  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const currentColumn = boardColumns.find((item) => item.id === columnId);
  const columnTasks = currentColumn.Tasks;
  const task = columnTasks.find((item) => item.id === taskId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editTaskText = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      await tasksApi.updateTaskText(taskId, trimmedInputValue);

      const newTasks = columnTasks.map((item) => {
        if (item.id === taskId) {
          return { ...item, name: trimmedInputValue };
        }

        return item;
      });

      const newColumns = boardColumns.map((item) => {
        if (item.id === columnId) {
          return { ...item, Tasks: newTasks };
        }

        return item;
      });

      dispatch(setBoardColumns(newColumns));
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
      placeholder="Edit task text"
      btnText="Edit Text"
      defaultValue={task.text}
      onChange={handleInputChange}
      onClick={editTaskText}
    />
  );
}

export default TaskTextEditPopup;
