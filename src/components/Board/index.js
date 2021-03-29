import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import BoardCard from '../BoardCard';
import EditBoardNamePopup from '../EditBoardNamePopup';
import useStyles from './style';

function Board() {
  const classes = useStyles();
  const routParams = useParams();
  const allBoards = useSelector((state) => state.boards.allBoards);
  const boardId = Number(routParams.id);
  const board = allBoards.find((item) => item.id === boardId);
  const boardColumns = board.columns;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isEditBoardNamePopupOpen = Boolean(anchorEl);
  const editBoardNamePopupId = isEditBoardNamePopupOpen
    ? 'simple-popover'
    : undefined;

  const openEditBoardNamePopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeEditBoardNamePopup = () => setAnchorEl(null);

  return (
    <Container className={classes.main} component="main" maxWidth={false}>
      <Container component="section" maxWidth={false} disableGutters>
        <Typography className={classes.title} component="h1" variant="h4">
          {board.name}
        </Typography>
        <IconButton
          className={classes.editBoardNameBtn}
          onClick={openEditBoardNamePopup}
        >
          <EditIcon />
        </IconButton>
        <EditBoardNamePopup
          id={editBoardNamePopupId}
          boardId={boardId}
          isOpen={isEditBoardNamePopupOpen}
          anchorEl={anchorEl}
          onClose={closeEditBoardNamePopup}
        />
        <Grid className={classes.boardsList} container spacing={2}>
          {boardColumns.map((column) => (
            <BoardCard id={column.id} name={column.name} key={column.id} />
          ))}
          {/* <AddBoardColumn key="0" /> */}
        </Grid>
      </Container>
    </Container>
  );
}

export default Board;
