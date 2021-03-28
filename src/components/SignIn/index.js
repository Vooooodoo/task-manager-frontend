import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RouterLink from '../RouterLink';
import Input from '../Input';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <section className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Input
            id="email"
            type="email"
            label="Email Address"
            minLength={validationConsts.INPUT_MIN_LENGTH}
            maxLength={validationConsts.INPUT_MAX_LENGTH}
            isFocus
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <RouterLink route="/sign-up" text="Don't have an account? Sign Up" />
        </form>
      </section>
    </Container>
  );
}

export default SignIn;
