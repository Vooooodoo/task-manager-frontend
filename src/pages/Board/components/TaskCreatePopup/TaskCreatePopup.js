import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as columnsApi from '../../../../api/columnsApi';
import * as tasksApi from '../../../../api/tasksApi';
import InputPopup from '../../../../components/InputPopup/InputPopup';
import { setBoardColumns } from '../../../../store/reducers/boards';

// eslint-disable-next-line object-curly-newline
function TaskCreatePopup({ id, columnId, isOpen, anchorEl, onClose }) {
  const dispatch = useDispatch();
  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const currentColumn = boardColumns.find((item) => item.id === columnId);
  const columnTasks = currentColumn.Tasks;

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createTask = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      try {
        const newTask = await tasksApi.createTask(columnId, trimmedInputValue);

        const newTasks = [...columnTasks, newTask.data];

        const tasksOrder = newTasks.map((item) => item.id);

        const newColumns = boardColumns.map((item) => {
          if (item.id === columnId) {
            return { ...item, Tasks: newTasks };
          }

          return item;
        });

        dispatch(setBoardColumns(newColumns));
        onClose();
        setInputValue('');

        await columnsApi.updateColumnTasksOrder(columnId, tasksOrder);
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
