/* eslint-disable no-plusplus */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container as DndContainer, Draggable } from 'react-smooth-dnd';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

import BoardNameEditPopup from './components/BoardNameEditPopup/BoardNameEditPopup';
import ColumnCreateButton from './components/ColumnCreateButton/ColumnCreateButton';
import Column from './components/Column/Column';

import * as columnsApi from '../../api/columnsApi';
import * as boardsApi from '../../api/boardsApi';

import { setBoard, setBoardColumns } from '../../store/reducers/boards';

import useStyles from './Board.style';

function Board() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const routParams = useParams();
  const boardId = Number(routParams.id);

  const board = useSelector((state) => state.boards.board);
  const boardColumns = useSelector((state) => state.boards.boardColumns);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isBoardNameEditPopupOpen = Boolean(anchorEl);
  const boardNameEditPopupId = isBoardNameEditPopupOpen
    ? 'simple-popover'
    : undefined;

  const [isLoading, setIsLoading] = React.useState(false);

  const openBoardNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeBoardNameEditPopup = () => setAnchorEl(null);

  const getBoard = async () => {
    try {
      const currentBoard = await boardsApi.getBoard(boardId);

      dispatch(setBoard(currentBoard.data));
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const getBoardColumns = async () => {
    setIsLoading(true);

    try {
      const columns = await columnsApi.getBoardColumns(boardId);

      const sortedColumns = columns.data.map((column) => {
        const tasks = column.Tasks;
        const sortedTasks = [];
        const { tasksPos } = column;

        if (tasksPos) {
          for (let i = 0; i < tasksPos.length; i++) {
            tasks.forEach((task) => {
              if (task.id === tasksPos[i]) {
                sortedTasks.push(task);
              }
            });
          }
        }

        return { ...column, Tasks: sortedTasks };
      });

      dispatch(setBoardColumns(sortedColumns));
    } catch (err) {
      console.log(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getBoard();
    getBoardColumns();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress color="secondary" />
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
              wrap="nowrap"
            >
              <DndContainer orientation="horizontal" groupName="board">
                {boardColumns.map((column) => (
                  <Draggable key={column.id}>
                    <Column id={column.id} name={column.name} key={column.id} />
                  </Draggable>
                ))}
              </DndContainer>

              <ColumnCreateButton key="0" />
            </Grid>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Board;
