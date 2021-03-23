import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input({
  id,
  label,
  isFocus,
  minLength,
  maxLength,
  pattern,
  type,
  multiline,
  isRequired,
  rows,
  defaultValue,
}) {
  const [validationMessage, setValidationMessage] = React.useState('');
  const [isInputValid, setIsInputValid] = React.useState(true);

  const handleInputChange = (evt) => {
    if (!evt.target.validity.valid) {
      setValidationMessage(evt.target.validationMessage);
      setIsInputValid(false);
    } else {
      setValidationMessage('');
      setIsInputValid(true);
    }
  };

  return (
    <TextField
      error={!isInputValid}
      helperText={validationMessage}
      id={id}
      label={label}
      name={id}
      type={type}
      autoFocus={isFocus}
      inputProps={{
        maxLength,
        minLength,
        pattern,
      }}
      required={isRequired}
      multiline={multiline}
      variant="outlined"
      margin="normal"
      fullWidth
      rows={rows}
      defaultValue={defaultValue}
      onChange={handleInputChange}
    />
  );
}

export default Input;
