import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import RouterLink from '../RouterLink';
import * as auth from '../../utils/auth';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function SignIn() {
  const classes = useStyles();
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .min(validationConsts.INPUT_MIN_LENGTH)
        .max(validationConsts.INPUT_MAX_LENGTH)
        .required('Email Adress is a required field.'),
      password: Yup.string()
        .min(validationConsts.PASSWORD_INPUT_MIN_LENGTH)
        .max(validationConsts.INPUT_MAX_LENGTH)
        .required('Password is a required field.'),
    }),
    onSubmit: ({ email, password }) => {
      auth.signIn(email, password);
    },
  });

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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            error={Boolean(touched.email && errors.email)}
            helperText={errors.email}
            id="email"
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            helperText={errors.password}
            id="password"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
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
