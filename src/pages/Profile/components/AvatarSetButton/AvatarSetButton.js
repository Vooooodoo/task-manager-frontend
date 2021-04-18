import React from 'react';

import Button from '@material-ui/core/Button';

import AvatarSetPopup from '../AvatarSetPopup/AvatarSetPopup';
import useStyles from './AvatarSetButton.style';

function AvatarSetButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAvatarSetPopupOpen = Boolean(anchorEl);
  const avatarSetPopupId = isAvatarSetPopupOpen ? 'simple-popover' : undefined;

  const openAvatarSetPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeAvatarSetPopup = () => setAnchorEl(null);

  return (
    <>
      <Button
        className={classes.setBtn}
        onClick={openAvatarSetPopup}
      />

      <AvatarSetPopup
        id={avatarSetPopupId}
        isOpen={isAvatarSetPopupOpen}
        anchorEl={anchorEl}
        onClose={closeAvatarSetPopup}
      />
    </>
  );
}

export default AvatarSetButton;
