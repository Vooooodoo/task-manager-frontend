import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

import * as usersApi from '../../../../api/usersApi';
import { setUser } from '../../../../store/reducers/users';

import useStyles from './AvatarSetPopup.style';

function AvatarSetPopup({
  id,
  isOpen,
  anchorEl,
  onClose,
  onClick,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { values, handleSubmit } = useFormik({
    initialValues: {
      avatar: null,
    },
    onSubmit: async ({ avatar }) => {
      try {
        // eslint-disable-next-line no-undef
        const formData = new FormData();

        formData.append('file', avatar);

        const user = await usersApi.updateUserAvatar(formData);

        dispatch(setUser(user.data));
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });

  const handleFileUpload = (evt) => {
    // eslint-disable-next-line prefer-destructuring
    values.avatar = evt.target.files[0];
  };

  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      PaperProps={{ className: classes.paper }}
    >
      <form encType="multipart/form-data" onSubmit={handleSubmit} noValidate>
        <input
          className={classes.fileInput}
          type="file"
          name="file"
          onChange={handleFileUpload}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={onClick}
        >
          Confirm
        </Button>
      </form>
    </Popover>
  );
}

export default AvatarSetPopup;
