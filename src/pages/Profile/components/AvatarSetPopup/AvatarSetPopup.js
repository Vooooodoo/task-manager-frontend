import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

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
  const [avatarFile, setAvatarFile] = React.useState(null);

  const handleFileUpload = (evt) => {
    const file = evt.target.files[0];

    setAvatarFile(file);
  };

  const { handleSubmit } = useFormik({
    onSubmit: async () => {
      try {
        // eslint-disable-next-line no-undef
        const formData = new FormData();

        formData.append('filedata', avatarFile);

        const user = await usersApi.setUserAvatar(formData);

        dispatch(setUser(user.data));
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });

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
