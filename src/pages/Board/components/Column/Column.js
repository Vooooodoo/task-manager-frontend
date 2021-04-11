import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ColumnNameEditPopup from '../ColumnNameEditPopup/ColumnNameEditPopup';
import ColumnDeleteButton from '../ColumnDeleteButton/ColumnDeleteButton';
// import TaskCreateButton from '../TaskCreateButton/TaskCreateButton';
import Task from '../Task/Task';

import useStyles from './Column.style';

function Column({ id, name }) {
  const classes = useStyles();

  // const routParams = useParams();
  // const boardId = Number(routParams.id);

  const allTasks = useSelector((state) => state.tasks.allTasks);
  // const board = allTasks.find((item) => item.id === boardId);
  // const boardColumns = board.columns;
  // const column = boardColumns.find((item) => item.id === id);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnNameEditPopupOpen = Boolean(anchorEl);
  const columnNameEditPopupId = isColumnNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openColumnNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeColumnNameEditPopup = () => setAnchorEl(null);

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
        {allTasks.map((task) => (
          <Task
            taskId={task.id}
            columnId={id}
            text={task.text}
            key={task.id}
          />
        ))}
        {/* <TaskCreateButton key="0" /> */}
      </Grid>
    </Grid>
  );
}

export default Column;
