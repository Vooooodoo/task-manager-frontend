import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input({
  id, label, isFocus, minLength, pattern,
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
      type={id}
      autoFocus={isFocus}
      inputProps={{
        maxLength: 40,
        minLength,
      }}
      pattern={pattern}
      required
      variant="outlined"
      margin="normal"
      fullWidth
      onChange={handleInputChange}
    />
  );
}

export default Input;
