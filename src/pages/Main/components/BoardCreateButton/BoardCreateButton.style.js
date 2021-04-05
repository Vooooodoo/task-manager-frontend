import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'grey',
    backgroundClip: 'content-box',
    minHeight: theme.spacing(25),
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  createBtn: {
    width: '100%',
    height: '100%',
    color: 'white',
  },
}));

export default useStyles;
