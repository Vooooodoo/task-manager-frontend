import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { setIsLoggedIn } from '../../store/auth';

// стоковый способ стилизации Material UI компонентов
// единый объект с классами в котором описываем стили конкретного компонента
// также есть доступ к глобальному объекту theme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  routerMenuLink: {
    textDecoration: 'none',
    color: '#000000DE',
    width: '100%',
    padding: '6px 16px',
  },
  routerMenuItem: {
    padding: '0',
  },
  routerHomeLink: {
    display: 'flex',
    alignItems: 'center',
  },
  whiteColor: {
    color: theme.whiteColor,
  },
}));

function Header({ isLoggedIn, onSetIsLoggedIn }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.homeButton}
          color="inherit"
          aria-label="menu"
        >
          <Link className={classes.routerHomeLink} to="/main">
            <HomeIcon className={classes.whiteColor} />
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
              <MenuItem onClick={() => onSetIsLoggedIn(false)}>
                Sign Out
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  onSetIsLoggedIn: (isLoggedIn) => dispatch(setIsLoggedIn(isLoggedIn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
