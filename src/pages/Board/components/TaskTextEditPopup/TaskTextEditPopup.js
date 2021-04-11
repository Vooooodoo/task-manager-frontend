import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import { setAllTasks } from '../../../../store/reducers/tasks';

function TaskTextEditPopup({
  id, taskId, columnId, isOpen, anchorEl, onClose,
}) {
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const task = allTasks.find((item) => item.id === taskId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editTaskText = (editTaskId) => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newTasks = allTasks.map((item) => {
        if (item.id === editTaskId) {
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
      onClick={() => editTaskText(taskId, columnId)}
    />
  );
}

export default TaskTextEditPopup;
