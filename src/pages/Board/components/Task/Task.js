import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TaskTextEditPopup from '../TaskTextEditPopup/TaskTextEditPopup';
// import TaskDeleteButton from '../TaskDeleteButton/TaskDeleteButton';

import useStyles from './Task.style';

function Task({ taskId, text }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnNameEditPopupOpen = Boolean(anchorEl);
  const columnNameEditPopupId = isColumnNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openTaskTextEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTaskTextEditPopup = () => setAnchorEl(null);

  return (
    <Grid className={classes.container} component="li" item>
      <Button className={classes.nameEditBtn} onClick={openTaskTextEditPopup}>
        {text}
      </Button>

      <TaskTextEditPopup
        id={columnNameEditPopupId}
        taskId={taskId}
        isOpen={isColumnNameEditPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskTextEditPopup}
      />

      {/* <TaskDeleteButton delColumnId={id} /> */}
    </Grid>
  );
}

export default Task;
