import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import * as columnsApi from '../../../../api/columnsApi';
import { setBoardColumns } from '../../../../store/reducers/boards';

function UserDeletePopup({
  id, delColumnId, isOpen, anchorEl, onClose,
}) {
  const columns = useSelector((state) => state.boards.boardColumns);
  const dispatch = useDispatch();

  const deleteUser = async (userId) => {
    try {
      await columnsApi.removeColumn(userId);

      const newColumns = columns.filter((column) => column.id !== userId);

      dispatch(setBoardColumns(newColumns));
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
      onClick={() => deleteUser(delColumnId)}
    />
  );
}

export default UserDeletePopup;
