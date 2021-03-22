import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RouterLink from '../RouterLink';
import Input from '../Input';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

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
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                id="firstName"
                type="text"
                label="First Name"
                minLength="2"
                pattern="^[a-zA-Z\s\-]+$"
                isFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="lastName"
                type="text"
                label="Last Name"
                minLength="2"
                pattern="^[a-zA-Z\s\-]+$"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="email"
                type="email"
                label="Email Address"
                minLength="2"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                label="Password"
                type="password"
                minLength="8"
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
