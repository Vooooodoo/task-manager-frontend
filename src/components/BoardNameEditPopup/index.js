import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setBoards } from '../../store/boards';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function BoardNameEditPopup({
  id, isOpen, anchorEl, onClose,
}) {
  const classes = useStyles();
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const editBoardName = () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      const newBoards = allBoards.map((item) => {
        if (item.id === boardId) {
          // не мутируем объект внутри массива, а возвращаем новый
          return { ...item, name: inputValue };
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
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 5,
        horizontal: 10,
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
        placeholder="Edit board name"
        size="small"
        autoComplete="off"
        fullWidth
        defaultValue={board.name}
        onChange={handleInputChange}
      />
      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={editBoardName}
      >
        Edit Name
      </Button>
    </Popover>
  );
}

export default BoardNameEditPopup;
