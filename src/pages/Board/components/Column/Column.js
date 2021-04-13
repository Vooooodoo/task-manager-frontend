import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ColumnNameEditPopup from '../ColumnNameEditPopup/ColumnNameEditPopup';
import ColumnDeleteButton from '../ColumnDeleteButton/ColumnDeleteButton';
import TaskCreateButton from '../TaskCreateButton/TaskCreateButton';
import Task from '../Task/Task';

import itemTypes from '../../../../utils/drugAndDrop';

import useStyles from './Column.style';

// eslint-disable-next-line no-unused-vars
function Column({ id, name }) {
  const classes = useStyles();

  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const currentColumn = boardColumns.find((item) => item.id === id);
  const columnTasks = currentColumn.Tasks;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnNameEditPopupOpen = Boolean(anchorEl);
  const columnNameEditPopupId = isColumnNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openColumnNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeColumnNameEditPopup = () => setAnchorEl(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.COLUMN,
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
        onClick={openColumnNameEditPopup}
      >
        {name}
      </Button>

      <ColumnNameEditPopup
        id={columnNameEditPopupId}
        columnId={id}
        isOpen={isColumnNameEditPopupOpen}
        anchorEl={anchorEl}
        onClose={closeColumnNameEditPopup}
      />

      <ColumnDeleteButton delColumnId={id} />

      <Grid
        className={classes.column}
        component="ul"
        container
        spacing={1}
        direction="column"
      >
        {columnTasks.map((task) => (
          <Task
            columnId={id}
            taskId={task.id}
            text={task.text}
            key={task.id}
          />
        ))}
        <TaskCreateButton key="0" columnId={id} />
      </Grid>
    </Grid>
  );
}

export default Column;
