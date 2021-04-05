import React from 'react';
import { useDispatch } from 'react-redux';

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

import RouterLink from '../../components/RouterLink/RouterLink';
import * as auth from '../../utils/auth';
import * as validationConsts from '../../utils/constants';
import { setIsLoggedIn } from '../../store/auth';

import useStyles from './SignIn.style';

function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

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
        .email(validationConsts.INPUT_EMAIL_TEXT)
        .min(
          validationConsts.INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        )
        .required(validationConsts.INPUT_REQUIRED_TEXT)
        .trim(),
      password: Yup.string()
        .min(
          validationConsts.PASSWORD_INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        )
        .required(validationConsts.INPUT_REQUIRED_TEXT)
        .trim(),
    }),
    onSubmit: async ({ email, password }) => {
      const res = await auth.signIn(email, password);

      if (res.data.token) {
        dispatch(setIsLoggedIn(true));
      } else {
        console.log(res.message);
      }
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
