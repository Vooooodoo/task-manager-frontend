import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import BoardDeletePopup from '../BoardDeletePopup/BoardDeletePopup';

import useStyles from './BoardCard.style';

function BoardCard({ id, name }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isBoardDeletePopupOpen = Boolean(anchorEl);
  const boardDeletePopupId = isBoardDeletePopupOpen
    ? 'simple-popover'
    : undefined;

  const openBoardDeletePopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeBoardDeletePopup = () => setAnchorEl(null);

  return (
    <Grid
      className={classes.boardCard}
      component="li"
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Link className={classes.routerLink} to={`/boards/${id}`}>
        <Typography className={classes.title} component="h2" variant="h5">
          {name}
        </Typography>
      </Link>

      <IconButton
        className={classes.boardDelBtn}
        onClick={openBoardDeletePopup}
      >
        <DeleteIcon className={classes.boardDelIcon} />
      </IconButton>

      <BoardDeletePopup
        id={boardDeletePopupId}
        delBoardId={id}
        isOpen={isBoardDeletePopupOpen}
        anchorEl={anchorEl}
        onClose={closeBoardDeletePopup}
      />
    </Grid>
  );
}

export default BoardCard;
