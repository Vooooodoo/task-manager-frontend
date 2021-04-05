import React from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import useStyles from './style';

function TooltipPopup({
  id,
  delElId,
  isOpen,
  anchorEl,
  tooltipText,
  onClose,
  onClick,
}) {
  const classes = useStyles();

  return (
    <Popover
      id={id}
      delElId={delElId}
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
      <Typography className={classes.title} component="h3" variant="h4">
        {tooltipText}
      </Typography>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={onClick}
      >
        ok
      </Button>
    </Popover>
  );
}

export default TooltipPopup;
