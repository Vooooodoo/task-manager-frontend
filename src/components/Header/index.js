import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { setIsLoggedIn } from '../../store/auth';
import useStyles from './style';

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleMenu = (evt) => setAnchorEl(evt.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.homeBtn}
          color="inherit"
          aria-label="menu"
        >
          <Link className={classes.routerHomeLink} to="/main">
            <HomeIcon className={classes.homeIcon} />
          </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Trollo
        </Typography>
        {isLoggedIn && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
              open={open}
              onClose={handleClose}
            >
              <MenuItem className={classes.routerMenuItem}>
                <Link
                  className={classes.routerMenuLink}
                  onClick={handleClose}
                  to="/main"
                >
                  Main
                </Link>
              </MenuItem>
              <MenuItem className={classes.routerMenuItem}>
                <Link
                  className={classes.routerMenuLink}
                  onClick={handleClose}
                  to="/profile"
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setIsLoggedIn(false))}>
                Sign Out
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
