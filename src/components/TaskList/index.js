import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import AddIcon from '@material-ui/icons/Add';
// import Button from '@material-ui/core/Button';
// import BoardDeletePopup from '../BoardDeletePopup';
// import BoardNameEditPopup from '../BoardNameEditPopup';
import useStyles from './style';

function TaskList({ name }) {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const isTaskListNameEditPopupOpen = Boolean(anchorEl);
  // const taskListNameEditPopupId = isTaskListNameEditPopupOpen
  //   ? 'simple-popover'
  //   : undefined;

  // const openTaskListNameEditPopup = (evt) => setAnchorEl(evt.currentTarget);
  // const closeTaskListNameEditPopup = () => setAnchorEl(null);

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
      <Typography className={classes.title} component="h3" variant="h5">
        {name}
      </Typography>
      {/* <BoardNameEditPopup
        id={taskListNameEditPopupId}
        isOpen={isTaskListNameEditPopupOpen}
        anchorEl={anchorEl}
        onClose={closeTaskListNameEditPopup}
      /> */}
      {/* <Button className={classes.createBtn} onClick={}>
        <AddIcon className={classes.createIcon} />
        Add a list
      </Button> */}
      {/* <IconButton
        className={classes.boardNameEditBtn}
        onClick={openBoardNameEditPopup}
      >
        <EditIcon />
      </IconButton>
      <BoardDeletePopup
        id={boardDeletePopupId}
        delBoardId={id}
        isOpen={isBoardDeletePopupOpen}
        anchorEl={anchorEl}
        onClose={closeBoardDeletePopup}
      /> */}
    </Grid>
  );
}

export default TaskList;
