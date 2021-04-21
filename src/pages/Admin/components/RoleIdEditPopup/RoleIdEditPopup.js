import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputPopup from '../../../../components/InputPopup/InputPopup';

import * as usersApi from '../../../../api/usersApi';
import { setAllUsers } from '../../../../store/reducers/users';

// eslint-disable-next-line object-curly-newline
function RoleIdEditPopup({ id, userId, isOpen, anchorEl, onClose }) {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users.allUsers);

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editRoleId = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newUsers = allUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, roleId: trimmedInputValue };
        }

        return user;
      });

      dispatch(setAllUsers(newUsers));
      onClose();
      setInputValue('');

      await usersApi.updateUserRoleId(userId, trimmedInputValue);
    }
  };

  return (
    <InputPopup
      id={id}
      type="text"
      isOpen={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      placeholder="Edit role id"
      btnText="Edit Role"
      onChange={handleInputChange}
      onClick={editRoleId}
    />
  );
}

export default RoleIdEditPopup;
