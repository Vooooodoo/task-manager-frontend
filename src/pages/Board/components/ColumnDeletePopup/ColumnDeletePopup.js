import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import { setAllColumns } from '../../../../store/reducers/columns';

function ColumnDeletePopup({
  id, delColumnId, isOpen, anchorEl, onClose,
}) {
  const columns = useSelector((state) => state.columns.allColumns);
  const dispatch = useDispatch();

  const deleteColumn = (columnId) => {
    const newColumns = columns.filter((board) => board.id !== columnId);

    dispatch(setAllColumns(newColumns));
    onClose();
  };

  return (
    <ConfirmPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      btnText="Delete list"
      onClose={onClose}
      onClick={() => deleteColumn(delColumnId)}
    />
  );
}

export default ColumnDeletePopup;
