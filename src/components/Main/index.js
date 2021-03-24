import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BoardCard from '../BoardCard';

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
  const boards = [
    {
      id: 1,
      name: 'One',
    },
    {
      id: 2,
      name: 'Two',
    },
    {
      id: 3,
      name: 'Three',
    },
    {
      id: 4,
      name: 'Four',
    },
    {
      id: 5,
      name: 'Five',
    },
  ];

  return (
    <Container className={classes.main} component="main" maxWidth="md">
      <Container component="section" disableGutters>
        <Typography className={classes.title} component="h1" variant="h2">
          Boards
        </Typography>
        <Grid className={classes.boardsList} container component="ul" spacing={4}>
          {boards.map((board) => (
            <BoardCard id={board.id} name={board.name} />
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Main;
