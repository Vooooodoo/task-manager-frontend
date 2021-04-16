import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Draggable } from 'react-smooth-dnd';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ColumnNameEditPopup from '../ColumnNameEditPopup/ColumnNameEditPopup';
import ColumnDeleteButton from '../ColumnDeleteButton/ColumnDeleteButton';
import TaskCreateButton from '../TaskCreateButton/TaskCreateButton';
import Task from '../Task/Task';

import applyDrag from '../../../../utils/drugAndDrop';
import * as tasksApi from '../../../../api/tasksApi';
import * as columnsApi from '../../../../api/columnsApi';
import { setBoardColumns } from '../../../../store/reducers/boards';

import useStyles from './Column.style';

function Column({ id, name }) {
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const getTaskPayload = (index) => columnTasks[index];

  const onTaskDrop = async (dropResult) => {
    const { removedIndex, addedIndex } = dropResult;

    if (removedIndex !== null || addedIndex !== null) {
      const droppedTask = dropResult.payload;
      const newTasks = applyDrag(columnTasks, dropResult);

      if (droppedTask.columnId !== id) {
        const newTask = await tasksApi.createTask(id, droppedTask.text);
        const editedTasks = newTasks.map((task) => {
          if (task.columnId !== newTask.data.columnId) {
            return newTask.data;
          }

          return task;
        });

        const tasksPos = editedTasks.map((task) => task.id);

        const newColumns = boardColumns.map((column) => {
          if (column.id === id) {
            return { ...column, tasksPos, Tasks: editedTasks };
          }

          return column;
        });

        dispatch(setBoardColumns(newColumns));

        await columnsApi.updateColumnTasksPos(id, tasksPos);
        await tasksApi.removeTask(droppedTask.id);
      } else {
        const tasksPos = newTasks.map((item) => item.id);

        const newColumns = boardColumns.map((item) => {
          if (item.id === id) {
            return { ...item, tasksPos, Tasks: newTasks };
          }

          return item;
        });

        dispatch(setBoardColumns(newColumns));

        await columnsApi.updateColumnTasksPos(id, tasksPos);
      }
    }
  };

  return (
    <Grid className={classes.container} component="li" item>
      <Button className={classes.nameEditBtn} onClick={openColumnNameEditPopup}>
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
        <Container
          className={classes.taskContainer}
          onDrop={onTaskDrop}
          getChildPayload={(index) => getTaskPayload(index)}
          groupName="column"
        >
          {columnTasks.map((task) => (
            <Draggable key={task.id}>
              <Task columnId={id} taskId={task.id} text={task.text} />
            </Draggable>
          ))}
        </Container>

        <TaskCreateButton key="0" columnId={id} />
      </Grid>
    </Grid>
  );
}

export default Column;
