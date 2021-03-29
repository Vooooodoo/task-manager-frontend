import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  boardCard: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    backgroundClip: 'content-box',
    minHeight: theme.spacing(25),
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      cursor: 'pointer',
    },
  },
  title: {
    color: 'white',
    margin: theme.spacing(2),
    paddingTop: theme.spacing(2),
    overflow: 'hidden',
  },
  routerLink: {
    display: 'block',
    textDecoration: 'none',
    height: '100%',
    marginTop: theme.spacing(-2),
  },
  boardDelBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(2),
  },
  boardDelIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
