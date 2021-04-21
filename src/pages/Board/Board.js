/* eslint-disable no-plusplus */
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container as DndContainer, Draggable } from 'react-smooth-dnd';
import * as boardsApi from '../../api/boardsApi';
import * as columnsApi from '../../api/columnsApi';
import { setBoard, setBoardColumns } from '../../store/reducers/boards';
import applyDrag from '../../utils/drugAndDrop';
import useStyles from './Board.style';
import BoardNameEditPopup from './components/BoardNameEditPopup/BoardNameEditPopup';
import Column from './components/Column/Column';
import ColumnCreateButton from './components/ColumnCreateButton/ColumnCreateButton';

function Board() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const routParams = useParams();
  const boardId = Number(routParams.id);

  const board = useSelector((state) => state.boards.board);
  const boardColumns = useSelector((state) => state.boards.boardColumns);
  const boardColumnsOrder = board.columnsOrder;

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
      const columnsOrder = newColumns.map((column) => column.id);

      const newBoard = { ...board, columnsOrder };

      dispatch(setBoardColumns(newColumns));
      dispatch(setBoard(newBoard));

      await boardsApi.updateBoardColumnsOrder(boardId, columnsOrder);
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

      const sortedTasksColumns = columns.data.map((column) => {
        const tasks = column.Tasks;
        const sortedTasks = [];
        const { tasksOrder } = column;

        if (tasksOrder) {
          for (let i = 0; i < tasksOrder.length; i++) {
            tasks.forEach((task) => {
              if (task.id === tasksOrder[i]) {
                sortedTasks.push(task);
              }
            });
          }
        }

        return { ...column, Tasks: sortedTasks };
      });

      if (boardColumnsOrder) {
        const sortedColumns = [];

        for (let i = 0; i < boardColumnsOrder.length; i++) {
          sortedTasksColumns.forEach((column) => {
            if (column.id === boardColumnsOrder[i]) {
              sortedColumns.push(column);
            }
          });
        }

        dispatch(setBoardColumns(sortedColumns));
      } else {
        dispatch(setBoardColumns(sortedTasksColumns));
      }
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

            <Container className={classes.columnsList} component="ul">
              <DndContainer
                orientation="horizontal"
                groupName="board"
                onDrop={onColumnDrop}
              >
                {boardColumns.map((column) => (
                  <Draggable key={column.id}>
                    <Column
                      className={classes.column}
                      id={column.id}
                      name={column.name}
                      key={column.id}
                    />
                  </Draggable>
                ))}
              </DndContainer>

              <ColumnCreateButton key="0" />
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Board;
