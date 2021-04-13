import React from 'react';
import { useDrag } from 'react-dnd';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TaskTextEditPopup from '../TaskTextEditPopup/TaskTextEditPopup';
import TaskDeleteButton from '../TaskDeleteButton/TaskDeleteButton';

import itemTypes from '../../../../utils/drugAndDrop';

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

  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.TASK,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Grid
      className={classes.container}
      component="li"
      item
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Button
        className={classes.nameEditBtn}
        onClick={openTaskTextEditPopup}
      >
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

      <TaskDeleteButton columnId={columnId} delTaskId={taskId} />
    </Grid>
  );
}

export default Task;
