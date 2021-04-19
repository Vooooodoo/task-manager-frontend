import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import TaskTextEditPopup from '../TaskTextEditPopup/TaskTextEditPopup';
import TaskDeleteButton from '../TaskDeleteButton/TaskDeleteButton';

import useStyles from './Task.style';

function Task({ columnId, taskId, text }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnNameEditPopupOpen = Boolean(anchorEl);
  const columnNameEditPopupId = isColumnNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openTaskTextEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTaskTextEditPopup = () => setAnchorEl(null);

  return (
    <Box className={classes.container} component="li">
      <Button className={classes.nameEditBtn} onClick={openTaskTextEditPopup}>
        {text}
      </Button>

      <TaskTextEditPopup
        id={columnNameEditPopupId}
        columnId={columnId}
        taskId={taskId}
        isOpen={isColumnNameEditPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskTextEditPopup}
      />

      <TaskDeleteButton
        columnId={columnId}
        delTaskId={taskId}
      />
    </Box>
  );
}

export default Task;
