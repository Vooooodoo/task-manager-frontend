import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.mainContainerMarginTop,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  board: {
    backgroundColor: theme.palette.secondary.main,
    backgroundClip: 'content-box',
    minHeight: '200px',
    borderRadius: '8px',
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      cursor: 'pointer',
    },
  },
  boardTitle: {
    color: 'white',
    margin: theme.spacing(2, 0, 0, 2),
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
        <Grid container spacing={4}>
          {boards.map((board) => (
            <Grid
              className={classes.board}
              item
              key={board.id}
              xs={12}
              sm={6}
              md={4}
            >
              <Typography className={classes.boardTitle} component="h2" variant="h5">
                {board.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Main;
