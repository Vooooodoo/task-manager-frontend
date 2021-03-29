import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setBoards } from '../../store/boards';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function BoardCreatePopup({
  id, isOpen, anchorEl, onClose,
}) {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createBoard = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const boardId = Date.now();
      const newBoard = {
        id: boardId,
        name: inputValue,
        columns: [],
      };
      const newBoards = [newBoard, ...boards];

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
        name="boardName"
        type="text"
        autoFocus
        inputProps={{
          maxLength: validationConsts.BOARD_NAME_MAX_LENGTH,
        }}
        variant="outlined"
        color="secondary"
        placeholder="Add board title"
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
        onClick={createBoard}
      >
        Create Board
      </Button>
    </Popover>
  );
}

export default BoardCreatePopup;
