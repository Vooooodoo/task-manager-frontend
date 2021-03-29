import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TaskListCreatePopup from '../TaskListCreatePopup';
import useStyles from './style';

function TaskListCreateBtn() {
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
      xl={2}
      lg={3}
      md={4}
      sm={6}
      xs={12}
    >
      <Button className={classes.createBtn} onClick={openBoardCreatePopup}>
        <AddIcon className={classes.createIcon} />
        Add a list
      </Button>
      <TaskListCreatePopup
        id={boardCreatePopupId}
        isOpen={isBoardCreatePopupOpen}
        anchorEl={anchorEl}
        onClose={closeBoardCreatePopup}
      />
    </Grid>
  );
}

export default TaskListCreateBtn;
