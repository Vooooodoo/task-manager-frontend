import React from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import TooltipPopup from '../../components/TooltipPopup/TooltipPopup';
import RouterLink from '../../components/RouterLink/RouterLink';

import * as authApi from '../../api/authApi';
import * as validationConstants from '../../utils/constants';
import { setUser } from '../../store/reducers/users';

import useStyles from './SignIn.style';

const validationSchema = Yup.object({
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

function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tooltipText, setTooltipText] = React.useState('');
  const isTooltipPopupOpen = Boolean(anchorEl);
  const tooltipPopupId = isTooltipPopupOpen
    ? 'simple-popover'
    : undefined;

  const mainEl = React.useRef(null);

  const openTooltipPopup = () => {
    setAnchorEl(mainEl.current);
  };

  const closeTooltipPopup = () => {
    setAnchorEl(null);
  };

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
    validationSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const res = await authApi.signIn(email, password);

        dispatch(setUser(res.data.userData));
      } catch (err) {
        setTooltipText(err.response.data.message);
        openTooltipPopup();
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs" ref={mainEl}>
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
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <TooltipPopup
            id={tooltipPopupId}
            isOpen={isTooltipPopupOpen}
            anchorEl={anchorEl}
            tooltipText={tooltipText}
            onClose={closeTooltipPopup}
            onClick={closeTooltipPopup}
          />

          <RouterLink route="/sign-up" text="Don't have an account? Sign Up" />
        </form>
      </section>
    </Container>
  );
}

export default SignIn;
