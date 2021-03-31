import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundClip: 'content-box',
    minHeight: theme.spacing(7),
  },
  createBtn: {
    width: '100%',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: '0',
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
  },
  createIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
