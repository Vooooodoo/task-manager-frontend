import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BoardCard from '../BoardCard';
import AddBoardCard from '../AddBoardCard';
import CreateBoardPopup from '../CreateBoardPopup';
import useStyles from './style';

function Main() {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isCreateBoardPopupOpen = Boolean(anchorEl);
  const createBoardPopupId = isCreateBoardPopupOpen
    ? 'simple-popover'
    : undefined;

  const openCreateBoardPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeCreateBoardPopup = () => setAnchorEl(null);

  return (
    <Container className={classes.main} component="main" maxWidth="md">
      <Container component="section" disableGutters>
        <Typography className={classes.title} component="h1" variant="h2">
          Boards
        </Typography>
        <Grid
          className={classes.boardsList}
          component="ul"
          container
          spacing={4}
        >
          {boards.map((board) => (
            <BoardCard id={board.id} key={board.id} name={board.name} />
          ))}
          <AddBoardCard key="0" onClick={openCreateBoardPopup} />
          <CreateBoardPopup
            id={createBoardPopupId}
            isOpen={isCreateBoardPopupOpen}
            anchorEl={anchorEl}
            onClose={closeCreateBoardPopup}
          />
        </Grid>
      </Container>
    </Container>
  );
}

export default Main;
