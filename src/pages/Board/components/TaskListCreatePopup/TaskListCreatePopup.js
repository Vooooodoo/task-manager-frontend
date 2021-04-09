import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setAllColumns } from '../../../../store/reducers/columns';
import InputPopup from '../../../../components/InputPopup/InputPopup';

function TaskListCreatePopup({
  id, isOpen, anchorEl, onClose,
}) {
  // const routParams = useParams();
  // const boardId = Number(routParams.id);

  const columns = useSelector((state) => state.columns.allColumns);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createTaskList = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const columnId = Date.now();
      const newColumn = {
        id: columnId,
        name: trimmedInputValue,
      };
      const newColumns = [...columns, newColumn];

      dispatch(setAllColumns(newColumns));
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
