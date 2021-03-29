import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteBoardPopup from '../DeleteBoardPopup';
import useStyles from './style';

function BoardCard({ id, name }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isDeleteBoardPopupOpen = Boolean(anchorEl);
  const deleteBoardPopupId = isDeleteBoardPopupOpen
    ? 'simple-popover'
    : undefined;

  const openDeleteBoardPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeDeleteBoardPopup = () => setAnchorEl(null);

  return (
    <Grid
      className={classes.boardCard}
      component="li"
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Link className={classes.routerLink} to={`/board/${id}`}>
        <Typography className={classes.title} component="h2" variant="h5">
          {name}
        </Typography>
      </Link>
      <IconButton
        className={classes.delBoardBtn}
        onClick={openDeleteBoardPopup}
      >
        <DeleteIcon className={classes.delBoardIcon} />
      </IconButton>
      <DeleteBoardPopup
        id={deleteBoardPopupId}
        delBoardId={id}
        isOpen={isDeleteBoardPopupOpen}
        anchorEl={anchorEl}
        onClose={closeDeleteBoardPopup}
      />
    </Grid>
  );
}

export default BoardCard;
