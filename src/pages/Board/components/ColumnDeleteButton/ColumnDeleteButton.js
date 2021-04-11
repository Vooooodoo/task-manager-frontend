import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import ColumnDeletePopup from '../ColumnDeletePopup/ColumnDeletePopup';

import useStyles from './ColumnDeleteButton.style';

function ColumnDeleteButton({ delColumnId }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isColumnDelPopupOpen = Boolean(anchorEl);
  const columnDelPopupId = isColumnDelPopupOpen
    ? 'simple-popover'
    : undefined;

  const openColumnDelPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeColumnDelPopup = () => setAnchorEl(null);

  return (
    <>
      <IconButton className={classes.delBtn} onClick={openColumnDelPopup}>
        <DeleteIcon className={classes.delIcon} fontSize="small" />
      </IconButton>

      <ColumnDeletePopup
        id={columnDelPopupId}
        delColumnId={delColumnId}
        isOpen={isColumnDelPopupOpen}
        anchorEl={anchorEl}
        onClose={closeColumnDelPopup}
      />
    </>
  );
}

export default ColumnDeleteButton;
