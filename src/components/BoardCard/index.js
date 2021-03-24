import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  board: {
    backgroundColor: theme.palette.secondary.main,
    backgroundClip: 'content-box',
    minHeight: '200px',
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      cursor: 'pointer',
    },
  },
  title: {
    color: 'white',
    margin: theme.spacing(2, 0, 0, 2),
  },
}));

function BoardCard({ id, name }) {
  const classes = useStyles();

  return (
    <Grid className={classes.board} component="li" item key={id} xs={12} sm={6} md={4}>
      <Typography className={classes.title} component="h2" variant="h5">
        {name}
      </Typography>
    </Grid>
  );
}

export default BoardCard;
