import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import BoardDeletePopup from '../BoardDeletePopup';
import TaskListNameEditPopup from '../TaskListNameEditPopup';
import useStyles from './style';

function TaskList({ id, name }) {
  const classes = useStyles();
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
      <IconButton className={classes.delBtn}>
        <DeleteIcon
          className={classes.delIcon}
          fontSize="small"
        />
      </IconButton>
      {/* <BoardDeletePopup
        id={boardDeletePopupId}
        delBoardId={id}
        isOpen={isBoardDeletePopupOpen}
        anchorEl={anchorEl}
        onClose={closeBoardDeletePopup}
      /> */}
    </Grid>
  );
}

export default TaskList;
