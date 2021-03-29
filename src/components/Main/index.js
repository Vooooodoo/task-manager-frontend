import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BoardCard from '../BoardCard';
import BoardCreateCard from '../BoardCreateCard';
import useStyles from './style';

function Main() {
  const classes = useStyles();
  const boards = useSelector((state) => state.boards.allBoards);

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
          <BoardCreateCard key="0" />
        </Grid>
      </Container>
    </Container>
  );
}

export default Main;
