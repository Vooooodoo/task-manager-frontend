import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import TaskListCreatePopup from '../TaskListCreatePopup/TaskListCreatePopup';
import useStyles from './TaskListCreateButton.style';

function TaskListCreateButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isTaskListCreatePopupOpen = Boolean(anchorEl);
  const taskListCreatePopupId = isTaskListCreatePopupOpen
    ? 'simple-popover'
    : undefined;

  const openTaskListCreatePopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTaskListCreatePopup = () => setAnchorEl(null);

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
      <Button className={classes.createBtn} onClick={openTaskListCreatePopup}>
        <AddIcon className={classes.createIcon} />
        Add a list
      </Button>

      <TaskListCreatePopup
        id={taskListCreatePopupId}
        isOpen={isTaskListCreatePopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskListCreatePopup}
      />
    </Grid>
  );
}

export default TaskListCreateButton;
