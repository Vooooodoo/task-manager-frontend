import React from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import RouterLink from '../../components/RouterLink/RouterLink';
import TooltipPopup from '../../components/TooltipPopup/TooltipPopup';

import * as authApi from '../../api/authApi';
import * as validationConstants from '../../utils/constants';
import { setUser } from '../../store/reducers/users';

import useStyles from './SignUp.style';

const validationSchema = Yup.object({
  firstName: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .matches(
      validationConstants.INPUT_NAME_PATTERN,
      validationConstants.INPUT_NAME_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  lastName: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .matches(
      validationConstants.INPUT_NAME_PATTERN,
      validationConstants.INPUT_NAME_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  email: Yup
    .string()
    .email(validationConstants.INPUT_EMAIL_VALIDATION_TEXT)
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  password: Yup
    .string()
    .min(
      validationConstants.PASSWORD_INPUT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
});

function SignUp() {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema,
    // eslint-disable-next-line object-curly-newline
    onSubmit: async ({ firstName, lastName, email, password }) => {
      try {
        const res = await authApi
          .signUp(firstName, lastName, email, password);

        if (res.data.token) {
          dispatch(setUser(res.data.userData));
        }
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isTooltipPopupPopupOpen = Boolean(anchorEl);
  const tooltipPopupId = isTooltipPopupPopupOpen
    ? 'simple-popover'
    : undefined;

  // const openTooltipPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeTooltipPopup = () => setAnchorEl(null);

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

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                id="firstName"
                label="First Name"
                name="firstName"
                type="text"
                autoFocus
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                id="lastName"
                label="Last Name"
                name="lastName"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                id="email"
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
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

        <TooltipPopup
          id={tooltipPopupId}
          isOpen={isTooltipPopupPopupOpen}
          anchorEl={anchorEl}
          onClose={closeTooltipPopup}
        />
      </section>
    </Container>
  );
}

export default SignUp;
