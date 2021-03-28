import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import CreateBoardPopup from '../CreateBoardPopup';
import useStyles from './style';

function CreateBoardCard() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isCreateBoardPopupOpen = Boolean(anchorEl);
  const createBoardPopupId = isCreateBoardPopupOpen
    ? 'simple-popover'
    : undefined;

  const openCreateBoardPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeCreateBoardPopup = () => setAnchorEl(null);

  return (
    <Grid
      className={classes.addBoardCard}
      component="li"
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Button className={classes.addBtn} onClick={openCreateBoardPopup}>
        <AddIcon fontSize="large" />
      </Button>
      <CreateBoardPopup
        id={createBoardPopupId}
        isOpen={isCreateBoardPopupOpen}
        anchorEl={anchorEl}
        onClose={closeCreateBoardPopup}
      />
    </Grid>
  );
}

export default CreateBoardCard;
