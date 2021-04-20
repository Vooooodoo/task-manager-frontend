import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { setUser } from '../../../../store/reducers/users';
import {
  setUserBoards,
  setBoard,
  setBoardColumns,
} from '../../../../store/reducers/boards';
import { LOCAL_STORAGE_TOKEN_KEY } from '../../../../config';

import useStyles from './MenuPopup.style';

function MenuPopup({ isOpen, anchorEl, onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const handleSignOut = () => {
    //! clear all states at once
    dispatch(setUser({}));
    dispatch(setUserBoards([]));
    dispatch(setBoard({}));
    dispatch(setBoardColumns([]));

    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    onClose();
  };

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
        <Link className={classes.routerMenuLink} onClick={onClose} to="/main">
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

      {Boolean(user.roleId) && (
        <MenuItem className={classes.routerMenuItem}>
          <Link
            className={classes.routerMenuLink}
            onClick={onClose}
            to="/admin"
          >
            Admin
          </Link>
        </MenuItem>
      )}

      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );
}

export default MenuPopup;
