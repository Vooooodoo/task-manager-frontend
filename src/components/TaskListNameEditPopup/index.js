import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setBoards } from '../../store/boards';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function TaskListNameEditPopup({
  id, taskListId, isOpen, anchorEl, onClose,
}) {
  const classes = useStyles();
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const { columns } = board;
  const taskList = columns.find((item) => item.id === taskListId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editTaskListName = (listId) => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newTaskList = columns.map((item) => {
        if (item.id === listId) {
          return { ...item, name: trimmedInputValue };
        }

        return item;
      });

      const newBoards = allBoards.map((item) => {
        if (item.id === boardId) {
          const newBoardColumns = [...item.columns, newTaskList];

          return { ...item, columns: newBoardColumns };
        }

        return item;
      });

      dispatch(setBoards(newBoards));
      onClose();
      setInputValue('');
    }
  };

  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      PaperProps={{ className: classes.paper }}
    >
      <TextField
        className={classes.input}
        name="taskListName"
        type="text"
        autoFocus
        inputProps={{
          maxLength: validationConsts.BOARD_NAME_MAX_LENGTH,
        }}
        variant="outlined"
        color="secondary"
        placeholder="Edit list name"
        size="small"
        autoComplete="off"
        fullWidth
        defaultValue={taskList.name}
        onChange={handleInputChange}
      />
      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => editTaskListName(taskListId)}
      >
        Edit Name
      </Button>
    </Popover>
  );
}

export default TaskListNameEditPopup;
