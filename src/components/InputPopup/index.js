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
  placeholder,
  btnText,
  defaultValue,
  anchVertPos,
  anchHorPos,
  transVertPos,
  transHorPos,
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
        vertical: anchVertPos,
        horizontal: anchHorPos,
      }}
      transformOrigin={{
        vertical: transVertPos,
        horizontal: transHorPos,
      }}
      PaperProps={{ className: classes.paper }}
    >
      <TextField
        className={classes.input}
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
        defaultValue={defaultValue}
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

InputPopup.defaultProps = {
  anchVertPos: 'center',
  anchHorPos: 'center',
  transVertPos: 'center',
  transHorPos: 'center',
};

export default InputPopup;
