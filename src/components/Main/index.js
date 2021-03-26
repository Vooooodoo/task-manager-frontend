import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../BoardCard';
import AddBoardCard from '../AddBoardCard';
import { setBoards } from '../../store/boards';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.mainContainerMarginTop,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  boardsList: {
    listStyle: 'none',
    padding: '0',
  },
  newBoardPopup: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(30),
    boxSizing: 'border-box',
  },
  newBoardInput: {
    marginBottom: theme.spacing(2),
  },
}));

function Main() {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newBoardInputValue, setNewBoardInputValue] = React.useState('');
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleAddBtnClick = (evt) => setAnchorEl(evt.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);
  const handleNewBoardInputChange = (evt) => setNewBoardInputValue(evt.target.value);
  const handleNewBoardBtnClick = () => {
    const trimmedInputValue = newBoardInputValue.trim();

    if (trimmedInputValue) {
      const boardId = Date.now();
      const newBoard = {
        id: boardId,
        name: newBoardInputValue,
        columns: [],
      };
      const newBoards = [newBoard, ...boards];

      dispatch(setBoards(newBoards));
      handlePopoverClose();
      setNewBoardInputValue('');
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
            PaperProps={{ className: classes.newBoardPopup }}
          >
            <TextField
              name="boardName"
              className={classes.newBoardInput}
              type="text"
              autoFocus
              inputProps={{
                maxLength: 20,
              }}
              variant="outlined"
              color="secondary"
              placeholder="Add board title"
              size="small"
              autoComplete="off"
              fullWidth
              onChange={handleNewBoardInputChange}
            />
            <Button
              type="button"
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleNewBoardBtnClick}
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
