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
    width: '288px',
    margin: '0 auto',
    marginBottom: theme.spacing(1),
  },
  nameEditBtn: {
    display: 'flex',
    justifyContent: 'start',
    color: 'white',
    width: '100%',
    textTransform: 'none',
    fontSize: '16px',
  },
}));

export default useStyles;
