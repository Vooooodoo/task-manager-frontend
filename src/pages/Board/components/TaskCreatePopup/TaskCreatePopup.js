import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import * as tasksApi from '../../../../api/tasksApi';
import { setColumnTasks } from '../../../../store/reducers/boards';

function TaskCreatePopup({
  id, columnId, isOpen, anchorEl, onClose,
}) {
  const tasks = useSelector((state) => state.boards.columnTasks);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createTask = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      try {
        const newTask = await tasksApi.createTask(columnId, trimmedInputValue);

        const newTasks = [...tasks, newTask.data];

        dispatch(setColumnTasks(newTasks));
        onClose();
        setInputValue('');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <InputPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      placeholder="Enter card text..."
      btnText="Add Card"
      onChange={handleInputChange}
      onClick={createTask}
    />
  );
}

export default TaskCreatePopup;
