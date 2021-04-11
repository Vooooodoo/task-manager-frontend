import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setAllColumns } from '../../../../store/reducers/columns';

import InputPopup from '../../../../components/InputPopup/InputPopup';

function ColumnNameEditPopup({
  id, columnId, isOpen, anchorEl, onClose,
}) {
  // const routParams = useParams();
  // const boardId = Number(routParams.id);

  const allColumns = useSelector((state) => state.columns.allColumns);
  const column = allColumns.find((item) => item.id === columnId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editColumnName = (listId) => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newColumns = allColumns.map((item) => {
        if (item.id === listId) {
          return { ...item, name: trimmedInputValue };
        }

        return item;
      });

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
      placeholder="Edit list name"
      btnText="Edit Name"
      defaultValue={column.name}
      onChange={handleInputChange}
      onClick={() => editColumnName(columnId)}
    />
  );
}

export default ColumnNameEditPopup;
