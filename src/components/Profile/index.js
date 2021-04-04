import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as auth from '../../utils/auth';
import * as validationConsts from '../../utils/constants';
import useStyles from './style';

function Profile() {
  const classes = useStyles();
  const allUsers = useSelector((state) => state.users.allUsers);
  const authorizedUser = allUsers.find((item) => item.id === 1);
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: authorizedUser.firstName,
      lastName: authorizedUser.lastName,
      email: authorizedUser.email,
      about: authorizedUser.about,
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
        .required(validationConsts.INPUT_REQUIRED_TEXT),
      lastName: Yup.string()
        .min(
          validationConsts.INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        )
        .required(validationConsts.INPUT_REQUIRED_TEXT),
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
        .required(validationConsts.INPUT_REQUIRED_TEXT),
      password: Yup.string()
        .min(
          validationConsts.PASSWORD_INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        )
        .required(validationConsts.INPUT_REQUIRED_TEXT),
      about: Yup.string()
        .min(
          validationConsts.INPUT_MIN_LENGTH,
          validationConsts.INPUT_MIN_LENGTH_TEXT,
        )
        .max(
          validationConsts.TEXTAREA_INPUT_MAX_LENGTH,
          validationConsts.INPUT_MAX_LENGTH_TEXT,
        ),
    }),
    // eslint-disable-next-line object-curly-newline
    onSubmit: ({ firstName, lastName, email, password, about }) => {
      auth.signUp(firstName, lastName, email, password, about);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <section className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h2" variant="h5">
          {authorizedUser.firstName}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={errors.firstName}
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            value={values.firstName}
            defaultValue={authorizedUser.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
          <TextField
            error={Boolean(touched.about && errors.about)}
            helperText={errors.about}
            id="about"
            label="About"
            name="about"
            type="text"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            fullWidth
            value={values.about}
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
            Save
          </Button>
        </form>
      </section>
    </Container>
  );
}

export default Profile;
