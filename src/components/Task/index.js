import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TaskTextEditPopup from '../TaskTextEditPopup';
// import TaskDeleteButton from '../TaskDeleteButton';
import useStyles from './style';

function Task({ taskId, taskListId, text }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isTaskListNameEditPopupOpen = Boolean(anchorEl);
  const taskListNameEditPopupId = isTaskListNameEditPopupOpen
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
        id={taskListNameEditPopupId}
        taskId={taskId}
        taskListId={taskListId}
        isOpen={isTaskListNameEditPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskTextEditPopup}
      />
      {/* <TaskDeleteButton delTaskListId={id} /> */}
    </Grid>
  );
}

export default Task;
