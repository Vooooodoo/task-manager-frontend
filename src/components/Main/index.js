import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
}));

function Main() {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);
  // const dispatch = useDispatch(); не забудь этот импортнуть хук

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
          <AddBoardCard key="0" />
        </Grid>
      </Container>
    </Container>
  );
}

export default Main;
