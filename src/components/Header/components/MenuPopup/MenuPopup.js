import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { setIsLoggedIn } from '../../../../store/reducers/auth';

import useStyles from './MenuPopup.style';

function MenuPopup({ isOpen, anchorEl, onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpen}
      onClose={onClose}
    >
      <MenuItem className={classes.routerMenuItem}>
        <Link
          className={classes.routerMenuLink}
          onClick={onClose}
          to="/main"
        >
          Main
        </Link>
      </MenuItem>

      <MenuItem className={classes.routerMenuItem}>
        <Link
          className={classes.routerMenuLink}
          onClick={onClose}
          to="/profile"
        >
          Profile
        </Link>
      </MenuItem>

      <MenuItem onClick={() => dispatch(setIsLoggedIn(false))}>
        Sign Out
      </MenuItem>
    </Menu>
  );
}

export default MenuPopup;
