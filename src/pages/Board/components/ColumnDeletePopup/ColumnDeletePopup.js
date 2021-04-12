import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import * as columnsApi from '../../../../api/columnsApi';
import { setAllColumns } from '../../../../store/reducers/boards';

function ColumnDeletePopup({
  id, delColumnId, isOpen, anchorEl, onClose,
}) {
  const columns = useSelector((state) => state.columns.allColumns);
  const dispatch = useDispatch();

  const deleteColumn = async (columnId) => {
    try {
      await columnsApi.removeColumn(columnId);

      const newColumns = columns.filter((column) => column.id !== columnId);

      dispatch(setAllColumns(newColumns));
      onClose();
    } catch (err) {
      console.log(err.response.data.message);
    }
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
