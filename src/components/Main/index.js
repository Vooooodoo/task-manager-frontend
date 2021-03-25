import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../BoardCard';
import AddBoardCard from '../AddBoardCard';
// import { setBoards } from '../../store/boards';

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
  createBoardInput: {
    margin: theme.spacing(2),
  },
  createBoardConfrimBtn: {
    margin: theme.spacing(2),
  },
}));

function Main() {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);
  // const dispatch = useDispatch(); не забудь этот импортнуть хук
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAddBtnClick = (evt) => setAnchorEl(evt.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          <AddBoardCard key="0" id={id} handleAddBtnClick={handleAddBtnClick} />
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
          >
            <TextField
              name="boardName"
              className={classes.createBoardInput}
              type="text"
              autoFocus
              inputProps={{
                maxLength: 5,
                minLength: 2,
              }}
              variant="outlined"
              color="secondary"
              placeholder="Add board title"
            />
            <Button
              className={classes.createBoardConfrimBtn}
              type="button"
              variant="contained"
              color="secondary"
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
