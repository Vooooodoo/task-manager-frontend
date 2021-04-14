import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';

import TooltipPopup from '../../components/TooltipPopup/TooltipPopup';

import * as usersApi from '../../api/usersApi';
import { profileValidationSchema } from '../../utils/validation';
import { setUser } from '../../store/reducers/users';

import useStyles from './Profile.style';

function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tooltipText, setTooltipText] = React.useState('');
  const isTooltipPopupOpen = Boolean(anchorEl);
  const tooltipPopupId = isTooltipPopupOpen ? 'simple-popover' : undefined;

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
      firstName: user.firstName,
      lastName: user.lastName,
      //! feels like a not the best solution
      about: user.about === null
        ? ''
        : user.about,
    },
    profileValidationSchema,
    // eslint-disable-next-line object-curly-newline
    onSubmit: async ({ firstName, lastName, about }) => {
      try {
        const res = await usersApi.updateUserInfo(firstName, lastName, about);

        dispatch(setUser(res.data));
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
          <AccountCircle />
        </Avatar>

        <Typography component="h2" variant="h5">
          {user.firstName}
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

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

          <TextField
            error={touched.about && Boolean(errors.about)}
            helperText={touched.about && errors.about}
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

          <TooltipPopup
            id={tooltipPopupId}
            isOpen={isTooltipPopupOpen}
            anchorEl={anchorEl}
            tooltipText={tooltipText}
            onClose={closeTooltipPopup}
            onClick={closeTooltipPopup}
          />
        </form>
      </section>
    </Container>
  );
}

export default Profile;
