import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import BoardCreatePopup from '../BoardCreatePopup';
import useStyles from './style';

function BoardCreateButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isBoardCreatePopupOpen = Boolean(anchorEl);
  const boardCreatePopupId = isBoardCreatePopupOpen
    ? 'simple-popover'
    : undefined;

  const openBoardCreatePopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeBoardCreatePopup = () => setAnchorEl(null);

  return (
    <Grid
      className={classes.container}
      component="li"
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Button className={classes.createBtn} onClick={openBoardCreatePopup}>
        <AddIcon fontSize="large" />
      </Button>
      <BoardCreatePopup
        id={boardCreatePopupId}
        isOpen={isBoardCreatePopupOpen}
        anchorEl={anchorEl}
        onClose={closeBoardCreatePopup}
      />
    </Grid>
  );
}

export default BoardCreateButton;
