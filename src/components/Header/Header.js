import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

import MenuPopup from './components/MenuPopup/MenuPopup';

import useStyles from './Header.style';

function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuPopupOpen = Boolean(anchorEl);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  //! чистить стэйт, поэтому баг вылетает, когда появляется меню
  const openMenuPopup = (evt) => setAnchorEl(evt.currentTarget);
  const closeMenuPopup = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/main">
          <IconButton
            edge="start"
            className={classes.homeBtn}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon className={classes.homeIcon} />
          </IconButton>
        </Link>

        <Typography variant="h6" className={classes.title}>
          Trollo
        </Typography>

        {isLoggedIn && (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openMenuPopup}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <MenuPopup
              isOpen={isMenuPopupOpen}
              anchorEl={anchorEl}
              onClose={closeMenuPopup}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
