import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  board: {
    backgroundColor: 'grey',
    backgroundClip: 'content-box',
    minHeight: theme.spacing(25),
    transition: theme.customTransition,
    '&:hover': theme.customHover,
  },
  addButton: {
    width: '100%',
    height: '100%',
  },
}));

function BoardCard({ id, handleAddBtnClick }) {
  const classes = useStyles();

  return (
    <Grid className={classes.board} component="li" item xs={12} sm={6} md={4}>
      <Button
        className={classes.addButton}
        aria-describedby={id}
        onClick={handleAddBtnClick}
      >
        <AddIcon fontSize="large" />
      </Button>
    </Grid>
  );
}

export default BoardCard;
