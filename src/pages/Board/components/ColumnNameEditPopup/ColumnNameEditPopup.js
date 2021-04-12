import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as columnsApi from '../../../../api/columnsApi';
import { setBoardColumns } from '../../../../store/reducers/boards';

import InputPopup from '../../../../components/InputPopup/InputPopup';

function ColumnNameEditPopup({
  id, columnId, isOpen, anchorEl, onClose,
}) {
  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const column = boardColumns.find((item) => item.id === columnId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editColumnName = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      await columnsApi.updateColumnName(columnId, trimmedInputValue);

      const newColumns = boardColumns.map((item) => {
        if (item.id === columnId) {
          return { ...item, name: trimmedInputValue };
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
      placeholder="Edit list name"
      btnText="Edit Name"
      defaultValue={column.name}
      onChange={handleInputChange}
      onClick={editColumnName}
    />
  );
}

export default ColumnNameEditPopup;
