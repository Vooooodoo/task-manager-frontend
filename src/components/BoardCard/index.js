import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  board: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    backgroundClip: 'content-box',
    minHeight: theme.spacing(25),
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      cursor: 'pointer',
    },
  },
  title: {
    color: 'white',
    margin: theme.spacing(2),
    paddingTop: theme.spacing(2),
    overflow: 'hidden',
  },
  routerLink: {
    display: 'block',
    textDecoration: 'none',
    height: '100%',
    marginTop: theme.spacing(-2),
  },
  deleteBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(2),
  },
  deleteIcon: {
    color: theme.iconColor,
  },
}));

function BoardCard({ id, name }) {
  const classes = useStyles();

  const deleteBoard = () => {
    console.log('Hello!');
  };

  return (
    <Grid className={classes.board} component="li" item xs={12} sm={6} md={4}>
      <Link className={classes.routerLink} to={`/board/${id}`}>
        <Typography className={classes.title} component="h2" variant="h5">
          {name}
        </Typography>
      </Link>
      <IconButton className={classes.deleteBtn} onClick={deleteBoard}>
        <DeleteIcon className={classes.deleteIcon} />
      </IconButton>
    </Grid>
  );
}

export default BoardCard;
