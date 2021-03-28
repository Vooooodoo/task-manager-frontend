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
  delBoardBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(2),
  },
  delBoardIcon: {
    color: theme.iconColor,
  },
  delBoardPopup: {
    padding: theme.spacing(2),
  },
  delBoardPopupTitle: {
    marginTop: theme.spacing(-0.7),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
