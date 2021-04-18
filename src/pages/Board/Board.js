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

import applyDrag from '../../utils/drugAndDrop';
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

  const onColumnDrop = async (dropResult) => {
    const { removedIndex, addedIndex } = dropResult;

    if (removedIndex !== null && addedIndex !== null) {
      const newColumns = applyDrag(boardColumns, dropResult);
      const columnsPos = newColumns.map((column) => column.id);

      const newBoard = { ...board, columnsPos };

      dispatch(setBoardColumns(newColumns));
      dispatch(setBoard(newBoard));

      await boardsApi.updateBoardColumnsPos(boardId, columnsPos);
    }
  };

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

            <DndContainer
              orientation="horizontal"
              groupName="board"
              onDrop={onColumnDrop}
              render={(ref) => (
                <Grid
                  className={classes.columnsList}
                  component="ul"
                  container
                  spacing={3}
                  wrap="nowrap"
                  ref={ref}
                >
                  {boardColumns.map((column) => (
                    <Draggable
                      key={column.id}
                      render={() => (
                        <Column
                          id={column.id}
                          name={column.name}
                          key={column.id}
                        />
                      )}
                    />
                  ))}

                  <ColumnCreateButton key="0" />
                </Grid>
              )}
            />
          </Container>
        </Container>
      )}
    </>
  );
}

export default Board;
