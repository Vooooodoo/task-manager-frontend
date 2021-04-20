import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConfirmPopup from '../../../../components/ConfirmPopup/ConfirmPopup';

import * as usersApi from '../../../../api/usersApi';
import { setAllUsers } from '../../../../store/reducers/users';

// eslint-disable-next-line object-curly-newline
function UserDeletePopup({ id, delUserId, isOpen, anchorEl, onClose }) {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users.allUsers);

  const deleteUser = async (userId) => {
    try {
      const newUsers = allUsers.filter((user) => user.id !== userId);

      dispatch(setAllUsers(newUsers));
      onClose();

      await usersApi.removeUser(userId);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <ConfirmPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      btnText="Delete user"
      onClose={onClose}
      onClick={() => deleteUser(delUserId)}
    />
  );
}

export default UserDeletePopup;
