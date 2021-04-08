import React from 'react';

import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

import useStyles from './ConfirmPopup.style';

function ConfirmPopup({
  id,
  isOpen,
  anchorEl,
  btnText,
  onClose,
  onClick,
}) {
  const classes = useStyles();

  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 8,
        horizontal: 145,
      }}
      PaperProps={{ className: classes.paper }}
    >
      <Typography className={classes.title} component="h3" variant="h6">
        Are you sure?
      </Typography>

      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Popover>
  );
}

export default ConfirmPopup;
