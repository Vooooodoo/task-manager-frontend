import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BoardCard from '../BoardCard';
import AddBoardCard from '../AddBoardCard';
import { setBoards } from '../../store/boards';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function Main() {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [createBoardInputValue, setCreateBoardInputValue] = React.useState('');
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleAddBtnClick = (evt) => setAnchorEl(evt.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const handleCreateBoardInputChange = (evt) => setCreateBoardInputValue(evt.target.value);

  const createBoard = () => {
    const trimmedInputValue = createBoardInputValue.trim();

    if (trimmedInputValue) {
      const boardId = Date.now();
      const newBoard = {
        id: boardId,
        name: createBoardInputValue,
        columns: [],
      };
      const newBoards = [newBoard, ...boards];

      dispatch(setBoards(newBoards));
      handlePopoverClose();
      setCreateBoardInputValue('');
    }
  };

  return (
    <Container className={classes.main} component="main" maxWidth="md">
      <Container component="section" disableGutters>
        <Typography className={classes.title} component="h1" variant="h2">
          Boards
        </Typography>
        <Grid
          className={classes.boardsList}
          container
          component="ul"
          spacing={4}
        >
          {boards.map((board) => (
            <BoardCard id={board.id} name={board.name} key={board.id} />
          ))}
          <AddBoardCard key="0" handleAddBtnClick={handleAddBtnClick} />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            PaperProps={{ className: classes.createBoardPopup }}
          >
            <TextField
              name="boardName"
              className={classes.createBoardInput}
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
              onChange={handleCreateBoardInputChange}
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
        </Grid>
      </Container>
    </Container>
  );
}

export default Main;
