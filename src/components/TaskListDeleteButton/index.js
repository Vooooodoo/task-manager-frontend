import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TaskListDeletePopup from '../TaskListDeletePopup';
import useStyles from './style';

function TaskListDeleteButton({ delTaskListId }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isTaskListDelPopupOpen = Boolean(anchorEl);
  const taskListDelPopupId = isTaskListDelPopupOpen
    ? 'simple-popover'
    : undefined;

  const openTaskListDelPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTaskListDelPopup = () => setAnchorEl(null);

  return (
    <>
      <IconButton className={classes.delBtn} onClick={openTaskListDelPopup}>
        <DeleteIcon className={classes.delIcon} fontSize="small" />
      </IconButton>
      <TaskListDeletePopup
        id={taskListDelPopupId}
        delTaskListId={delTaskListId}
        isOpen={isTaskListDelPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskListDelPopup}
      />
    </>
  );
}

export default TaskListDeleteButton;
