import React from 'react';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function InputPopup({
  id,
  isOpen,
  anchorEl,
  onClose,
  inputName,
  placeholder,
  btnText,
  onChange,
  onClick,
}) {
  const classes = useStyles();

  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      PaperProps={{ className: classes.paper }}
    >
      <TextField
        className={classes.input}
        name={inputName}
        type="text"
        autoFocus
        inputProps={{
          maxLength: validationConsts.BOARD_NAME_MAX_LENGTH,
        }}
        variant="outlined"
        color="secondary"
        placeholder={placeholder}
        size="small"
        autoComplete="off"
        fullWidth
        onChange={onChange}
      />
      <Button
        type="button"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={onClick}
      >
        {btnText}
      </Button>
    </Popover>
  );
}

export default InputPopup;
