import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import BoardNameEditPopup from '../BoardNameEditPopup';
import TaskListCreateBtn from '../TaskListCreateBtn';
import TaskList from '../TaskList';
import useStyles from './style';

function Board() {
  const classes = useStyles();
  const routParams = useParams();
  const boardId = Number(routParams.id);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const boardColumns = board.columns;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isBoardNameEditPopupOpen = Boolean(anchorEl);
  const boardNameEditPopupId = isBoardNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const openBoardNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeBoardNameEditPopup = () => setAnchorEl(null);

  return (
    <Container className={classes.main} component="main" maxWidth={false}>
      <Container component="section" maxWidth={false} disableGutters>
        <Typography className={classes.title} component="h1" variant="h4">
          {board.name}
        </Typography>
        <IconButton
          className={classes.boardNameEditBtn}
          onClick={openBoardNameEditPopup}
        >
          <EditIcon />
        </IconButton>
        <BoardNameEditPopup
          id={boardNameEditPopupId}
          isOpen={isBoardNameEditPopupOpen}
          anchorEl={anchorEl}
          onClose={closeBoardNameEditPopup}
        />
        <Grid
          className={classes.boardsList}
          component="ul"
          container
          spacing={2}
        >
          {boardColumns.map((column) => (
            <TaskList id={column.id} name={column.name} key={column.id} />
          ))}
          <TaskListCreateBtn key="0" />
        </Grid>
      </Container>
    </Container>
  );
}

export default Board;
