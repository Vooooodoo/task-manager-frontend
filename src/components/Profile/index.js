import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '../Input';
import * as validationConsts from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <section className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h2" variant="h5">
          User name
        </Typography>
        <form className={classes.form} noValidate>
          <Input
            id="firstName"
            type="text"
            label="First Name"
            minLength={validationConsts.INPUT_MIN_LENGTH}
            maxLength={validationConsts.INPUT_MAX_LENGTH}
            pattern={validationConsts.NAME_INPUT_PATTERN}
            isRequired
          />
          <Input
            id="lastName"
            type="text"
            label="Last Name"
            minLength={validationConsts.INPUT_MIN_LENGTH}
            maxLength={validationConsts.INPUT_MAX_LENGTH}
            pattern={validationConsts.NAME_INPUT_PATTERN}
            isRequired
          />
          <Input
            id="email"
            type="email"
            label="Email Address"
            minLength={validationConsts.INPUT_MIN_LENGTH}
            maxLength={validationConsts.INPUT_MAX_LENGTH}
            isRequired
          />
          <Input
            id="password"
            label="Password"
            type="password"
            minLength={validationConsts.PASSWORD_INPUT_MIN_LENGTH}
            maxLength={validationConsts.INPUT_MAX_LENGTH}
            isRequired
          />
          <Input
            id="about"
            label="About"
            minLength={validationConsts.INPUT_MIN_LENGTH}
            maxLength={validationConsts.TEXTAREA_INPUT_MAX_LENGTH}
            multiline
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </section>
    </Container>
  );
}

export default Profile;
