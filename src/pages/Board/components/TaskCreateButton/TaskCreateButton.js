import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import TaskCreatePopup from '../TaskCreatePopup/TaskCreatePopup';

import useStyles from './TaskCreateButton.style';

function TaskCreateButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnCreatePopupOpen = Boolean(anchorEl);
  const columnCreatePopupId = isColumnCreatePopupOpen
    ? 'simple-popover'
    : undefined;

  const openColumnCreatePopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeColumnCreatePopup = () => setAnchorEl(null);

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
      <Button className={classes.createBtn} onClick={openColumnCreatePopup}>
        <AddIcon className={classes.createIcon} />
        Add a list
      </Button>

      <TaskCreatePopup
        id={columnCreatePopupId}
        isOpen={isColumnCreatePopupOpen}
        anchorEl={anchorEl}
        onClose={closeColumnCreatePopup}
      />
    </Grid>
  );
}

export default TaskCreateButton;
