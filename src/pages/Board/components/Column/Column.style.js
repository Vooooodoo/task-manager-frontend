import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundClip: 'content-box',
    transition: theme.customTransition,
    marginRight: theme.spacing(2),
  },
  nameEditBtn: {
    display: 'flex',
    justifyContent: 'start',
    color: 'white',
    width: '288px',
    textTransform: 'none',
    fontSize: '16px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.borderRadius,
    marginBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      cursor: 'pointer',
    },
  },
  column: {
    listStyle: 'none',
    padding: '0',
  },
}));

export default useStyles;
