import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import * as tasksApi from '../../../../api/tasksApi';
import { setAllTasks } from '../../../../store/reducers/boards';

function TaskTextEditPopup({
  id, taskId, isOpen, anchorEl, onClose,
}) {
  const allTasks = useSelector((state) => state.boards.allTasks);
  const task = allTasks.find((item) => item.id === taskId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editTaskText = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      await tasksApi.updateTaskText(taskId, trimmedInputValue);

      const newTasks = allTasks.map((item) => {
        if (item.id === taskId) {
          return { ...item, name: trimmedInputValue };
        }

        return item;
      });

      dispatch(setAllTasks(newTasks));
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
