import React from 'react';
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
import * as auth from '../../utils/auth';
import * as validationConsts from '../../utils/constants';
import RouterLink from '../RouterLink';
import TooltipPopup from '../TooltipPopup';
import useStyles from './style';

function SignUp() {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(
          validationConsts.INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        )
        .matches(
          validationConsts.INPUT_NAME_PATTERN,
          validationConsts.INPUT_NAME_TEXT,
        )
        .required(validationConsts.INPUT_REQUIRED_TEXT)
        .trim(),
      lastName: Yup.string()
        .min(
          validationConsts.INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        )
        .matches(
          validationConsts.INPUT_NAME_PATTERN,
          validationConsts.INPUT_NAME_TEXT,
        )
        .required(validationConsts.INPUT_REQUIRED_TEXT)
        .trim(),
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
    // eslint-disable-next-line object-curly-newline
    onSubmit: ({ firstName, lastName, email, password }) => {
      auth.signUp(firstName, lastName, email, password);
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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={errors.firstName}
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
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={errors.lastName}
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
                error={Boolean(touched.email && errors.email)}
                helperText={errors.email}
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
