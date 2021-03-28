import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { setBoards } from '../../store/boards';
import useStyles from './style';

function DeleteBoardPopup({
  id, isOpen, anchorEl, onClose, delBoardId,
}) {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const deleteBoard = (boardId) => {
    const newBoards = boards.filter((board) => board.id !== boardId);

    dispatch(setBoards(newBoards));
    onClose();
  };

  return (
    <Popover
      id={id}
      delBoardId={delBoardId}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 8,
        horizontal: 145,
      }}
      PaperProps={{ className: classes.paper }}
    >
      <Typography className={classes.title} component="h3" variant="h6">
        Are you sure?
      </Typography>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => deleteBoard(delBoardId)}
      >
        Delete board
      </Button>
    </Popover>
  );
}

export default DeleteBoardPopup;
