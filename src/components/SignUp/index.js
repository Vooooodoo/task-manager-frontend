import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RouterLink from '../RouterLink';
import Input from '../Input';
import * as auth from '../../utils/auth';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function SignUp() {
  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    auth.signUp('ab', 'ba', '2@2.ru', '12345678');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <section className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                id="firstName"
                type="text"
                label="First Name"
                minLength={validationConsts.INPUT_MIN_LENGTH}
                maxLength={validationConsts.INPUT_MAX_LENGTH}
                pattern={validationConsts.NAME_INPUT_PATTERN}
                isFocus
                isRequired
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="lastName"
                type="text"
                label="Last Name"
                minLength={validationConsts.INPUT_MIN_LENGTH}
                maxLength={validationConsts.INPUT_MAX_LENGTH}
                pattern={validationConsts.NAME_INPUT_PATTERN}
                isRequired
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="email"
                type="email"
                label="Email Address"
                minLength={validationConsts.INPUT_MIN_LENGTH}
                maxLength={validationConsts.INPUT_MAX_LENGTH}
                isRequired
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                label="Password"
                type="password"
                minLength={validationConsts.PASSWORD_INPUT_MIN_LENGTH}
                maxLength={validationConsts.INPUT_MAX_LENGTH}
                isRequired
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <RouterLink
            route="/sign-in"
            text="Already have an account? Sign in"
          />
        </form>
      </section>
    </Container>
  );
}

export default SignUp;
