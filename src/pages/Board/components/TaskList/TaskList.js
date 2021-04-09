import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TaskListNameEditPopup from '../TaskListNameEditPopup/TaskListNameEditPopup';
import TaskListDeleteButton from '../TaskListDeleteButton/TaskListDeleteButton';
// import TaskCreateButton from '../TaskCreateButton/TaskCreateButton';
import Task from '../Task/Task';

import useStyles from './TaskList.style';

function TaskList({ id, name }) {
  const classes = useStyles();

  // const routParams = useParams();
  // const boardId = Number(routParams.id);

  const allTasks = useSelector((state) => state.tasks.allTasks);
  // const board = allTasks.find((item) => item.id === boardId);
  // const boardColumns = board.columns;
  // const taskList = boardColumns.find((item) => item.id === id);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isTaskListNameEditPopupOpen = Boolean(anchorEl);
  const taskListNameEditPopupId = isTaskListNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openTaskListNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTaskListNameEditPopup = () => setAnchorEl(null);

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
      <Button
        className={classes.nameEditBtn}
        onClick={openTaskListNameEditPopup}
      >
        {name}
      </Button>

      <TaskListNameEditPopup
        id={taskListNameEditPopupId}
        taskListId={id}
        isOpen={isTaskListNameEditPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskListNameEditPopup}
      />

      <TaskListDeleteButton delTaskListId={id} />

      <Grid
        className={classes.taskList}
        component="ul"
        container
        spacing={1}
        direction="column"
      >
        {allTasks.map((task) => (
          <Task
            taskId={task.id}
            taskListId={id}
            text={task.text}
            key={task.id}
          />
        ))}
        {/* <TaskCreateButton key="0" /> */}
      </Grid>
    </Grid>
  );
}

export default TaskList;
