import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import BoardNameEditPopup from './components/BoardNameEditPopup/BoardNameEditPopup';
import TaskListCreateButton from './components/TaskListCreateButton/TaskListCreateButton';
import TaskList from './components/TaskList/TaskList';

import * as columnsApi from '../../api/columnsApi';
import { setAllColumns } from '../../store/reducers/columns';

import useStyles from './Board.style';

function Board() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const routParams = useParams();
  const boardId = Number(routParams.id);

  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === boardId);
  const columns = useSelector((state) => state.columns.allColumns);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isBoardNameEditPopupOpen = Boolean(anchorEl);
  const boardNameEditPopupId = isBoardNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const [isLoading, setIsLoading] = React.useState(false);

  const openBoardNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeBoardNameEditPopup = () => setAnchorEl(null);

  const getColumns = async () => {
    setIsLoading(true);

    try {
      const boardColumns = await columnsApi.getColumns(boardId);

      dispatch(setAllColumns(boardColumns.data));
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getColumns();
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
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
              className={classes.columnsList}
              component="ul"
              container
              spacing={3}
            >
              {columns.map((column) => (
                <TaskList id={column.id} name={column.name} key={column.id} />
              ))}
              <TaskListCreateButton key="0" />
            </Grid>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Board;
