import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import TaskDeletePopup from '../TaskDeletePopup/TaskDeletePopup';

import useStyles from './TaskDeleteButton.style';

function TaskDeleteButton({ columnId, delTaskId }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isTaskDelPopupOpen = Boolean(anchorEl);
  const taskDelPopupId = isTaskDelPopupOpen
    ? 'simple-popover'
    : undefined;

  const openTaskDelPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTaskDelPopup = () => setAnchorEl(null);

  return (
    <>
      <IconButton className={classes.delBtn} onClick={openTaskDelPopup}>
        <DeleteIcon className={classes.delIcon} fontSize="small" />
      </IconButton>

      <TaskDeletePopup
        id={taskDelPopupId}
        columnId={columnId}
        delTaskId={delTaskId}
        isOpen={isTaskDelPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskDelPopup}
      />
    </>
  );
}

export default TaskDeleteButton;
