import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import AvatarSetPopup from '../AvatarSetPopup/AvatarSetPopup';
import useStyles from './AvatarSetButton.style';

function ColumnCreateButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAvatarSetPopupOpen = Boolean(anchorEl);
  const avatarSetPopupId = isAvatarSetPopupOpen
    ? 'simple-popover'
    : undefined;

  const openAvatarSetPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeAvatarSetPopup = () => setAnchorEl(null);

  return (
    <Grid
      className={classes.container}
      component="li"
      item
      xl={2}
      lg={3}
      md={4}
      sm={6}
      xs={12}
    >
      <Button className={classes.createBtn} onClick={openAvatarSetPopup}>
        <AddIcon className={classes.createIcon} />
        Add a list
      </Button>

      <AvatarSetPopup
        id={avatarSetPopupId}
        isOpen={isAvatarSetPopupOpen}
        anchorEl={anchorEl}
        onClose={closeAvatarSetPopup}
      />
    </Grid>
  );
}

export default ColumnCreateButton;
