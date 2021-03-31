import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
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
    textTransform: 'none',
    fontSize: '16px',
    backgroundColor: theme.palette.success.main,
    borderRadius: '0',
    marginBottom: theme.spacing(1),
  },
  taskList: {
    listStyle: 'none',
    padding: '0',
  },
}));

export default useStyles;
