import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BoardCard from '../BoardCard';
import useStyles from './style';

function Board() {
  const classes = useStyles();
  const routParams = useParams();
  const allBoards = useSelector((state) => state.boards.allBoards);
  const board = allBoards.find((item) => item.id === Number(routParams.id));
  const boardColumns = board.columns;

  return (
    <Container className={classes.main} component="main" maxWidth={false}>
      <Container component="section" maxWidth={false} disableGutters>
        <Typography className={classes.title} component="h1" variant="h4">
          {board.name}
        </Typography>
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
