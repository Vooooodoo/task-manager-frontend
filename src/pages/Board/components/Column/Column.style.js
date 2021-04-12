import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundClip: 'content-box',
    transition: theme.customTransition,
  },
  nameEditBtn: {
    display: 'flex',
    justifyContent: 'start',
    color: 'white',
    width: '288px',
    textTransform: 'none',
    fontSize: '16px',
    backgroundColor: theme.palette.success.main,
    borderRadius: '0',
    marginBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      cursor: 'pointer',
    },
  },
  column: {
    listStyle: 'none',
    padding: '0',
  },
}));

export default useStyles;
