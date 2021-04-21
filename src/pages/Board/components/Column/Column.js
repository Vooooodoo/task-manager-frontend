import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container as DndContainer, Draggable } from 'react-smooth-dnd';
import * as columnsApi from '../../../../api/columnsApi';
import * as tasksApi from '../../../../api/tasksApi';
import { setBoardColumns } from '../../../../store/reducers/boards';
import applyDrag from '../../../../utils/drugAndDrop';
import ColumnDeleteButton from '../ColumnDeleteButton/ColumnDeleteButton';
import ColumnNameEditPopup from '../ColumnNameEditPopup/ColumnNameEditPopup';
import Task from '../Task/Task';
import TaskCreateButton from '../TaskCreateButton/TaskCreateButton';
import useStyles from './Column.style';

function Column({ id, name }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const currentColumn = boardColumns.find((column) => column.id === id);
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
    const { removedIndex, addedIndex, payload } = dropResult;

    if (removedIndex !== null || addedIndex !== null) {
      const droppedTask = payload;
      const newTasks = applyDrag(columnTasks, dropResult);
      const tasksOrder = newTasks.map((task) => task.id);

      if (droppedTask.columnId !== id) {
        const editedTasks = newTasks.map((task) => {
          if (task.id === droppedTask.id) {
            return { ...task, columnId: id };
          }

          return task;
        });

        const newColumns = boardColumns.map((column) => {
          if (column.id === id) {
            return { ...column, tasksOrder, Tasks: editedTasks };
          }

          return column;
        });

        dispatch(setBoardColumns(newColumns));

        await tasksApi.updateTaskColumnId(droppedTask.id, id);
      } else {
        const newColumns = boardColumns.map((column) => {
          if (column.id === id) {
            return { ...column, tasksOrder, Tasks: newTasks };
          }

          return column;
        });

        dispatch(setBoardColumns(newColumns));
      }

      await columnsApi.updateColumnTasksOrder(id, tasksOrder);
    }
  };

  return (
    <Box className={classes.container} component="li">
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

      <Box
        className={classes.column}
        component="ul"
      >
        <DndContainer
          groupName="column"
          onDrop={onTaskDrop}
          getChildPayload={(index) => getTaskPayload(index)}
        >
          {columnTasks.map((task) => (
            <Draggable key={task.id}>
              <Task columnId={id} taskId={task.id} text={task.text} />
            </Draggable>
          ))}
        </DndContainer>

        <TaskCreateButton key="0" columnId={id} />
      </Box>
    </Box>
  );
}

export default Column;
