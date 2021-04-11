import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ColumnNameEditPopup from '../ColumnNameEditPopup/ColumnNameEditPopup';
import ColumnDeleteButton from '../ColumnDeleteButton/ColumnDeleteButton';
import TaskCreateButton from '../TaskCreateButton/TaskCreateButton';
import Task from '../Task/Task';

import * as tasksApi from '../../../../api/tasksApi';
import { setAllTasks } from '../../../../store/reducers/tasks';

import useStyles from './Column.style';

function Column({ id, name }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.allTasks);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnNameEditPopupOpen = Boolean(anchorEl);
  const columnNameEditPopupId = isColumnNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openColumnNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeColumnNameEditPopup = () => setAnchorEl(null);

  const getTasks = async () => {
    try {
      const columnTasks = await tasksApi.getTasks(id);

      dispatch(setAllTasks(columnTasks.data));
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  React.useEffect(() => {
    getTasks();
  }, []);

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
        {tasks.map((task) => (
          <Task
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
