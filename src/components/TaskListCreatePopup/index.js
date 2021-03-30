import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setBoards } from '../../store/boards';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function TaskListCreatePopup({
  id, isOpen, anchorEl, onClose,
}) {
  const classes = useStyles();
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createTaskList = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newBoards = allBoards.map((board) => {
        if (board.id === boardId) {
          const taskListId = Date.now();
          const newTaskList = {
            id: taskListId,
            name: inputValue,
            items: [],
          };
          const newBoardColumns = [...board.columns, newTaskList];

          return { ...board, columns: newBoardColumns };
        }

        return board;
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
        placeholder="Enter list title..."
        size="small"
        autoComplete="off"
        fullWidth
        onChange={handleInputChange}
      />
      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={createTaskList}
      >
        Add List
      </Button>
    </Popover>
  );
}

export default TaskListCreatePopup;
