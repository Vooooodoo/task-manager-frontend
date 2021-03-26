import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { setBoards } from '../../store/boards';

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
  delBoardBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(2),
  },
  delBoardIcon: {
    color: theme.iconColor,
  },
  delBoardPopup: {
    padding: theme.spacing(2),
  },
  delBoardPopupTitle: {
    marginTop: theme.spacing(-0.7),
    marginBottom: theme.spacing(1),
  },
}));

function BoardCard({ id, name }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const popupId = open ? 'simple-popover' : undefined;
  const boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();

  const handleDelBtnClick = (evt) => setAnchorEl(evt.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  const deleteBoard = (boardId) => {
    const newBoards = boards.filter((board) => board.id !== boardId);

    dispatch(setBoards(newBoards));
    handlePopoverClose();
  };

  return (
    <Grid className={classes.board} component="li" item xs={12} sm={6} md={4}>
      <Link className={classes.routerLink} to={`/board/${id}`}>
        <Typography className={classes.title} component="h2" variant="h5">
          {name}
        </Typography>
      </Link>
      <IconButton className={classes.delBoardBtn} onClick={handleDelBtnClick}>
        <DeleteIcon className={classes.delBoardIcon} />
      </IconButton>
      <Popover
        id={popupId}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 8,
          horizontal: 145,
        }}
        PaperProps={{ className: classes.delBoardPopup }}
      >
        <Typography
          className={classes.delBoardPopupTitle}
          component="h3"
          variant="h6"
        >
          Are you sure?
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => deleteBoard(id)}
        >
          Yes!
        </Button>
      </Popover>
    </Grid>
  );
}

export default BoardCard;
