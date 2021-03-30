import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundColor: theme.palette.success.main,
    backgroundClip: 'content-box',
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      cursor: 'pointer',
    },
  },
  nameEditBtn: {
    display: 'flex',
    justifyContent: 'start',
    color: 'white',
    width: '100%',
    height: '100%',
    textTransform: 'none',
    fontSize: '16px',
  },
  delBtn: {
    position: 'absolute',
    top: '6px',
    right: theme.spacing(1),
  },
  delIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
