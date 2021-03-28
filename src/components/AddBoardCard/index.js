import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';

function AddBoardCard({ onClick }) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.addBoardCard}
      component="li"
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Button className={classes.addBtn} onClick={onClick}>
        <AddIcon fontSize="large" />
      </Button>
    </Grid>
  );
}

export default AddBoardCard;
