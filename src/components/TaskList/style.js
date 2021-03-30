import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.success.main,
    backgroundClip: 'content-box',
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      cursor: 'pointer',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    margin: theme.spacing(0, 2),
    marginRight: '0',
    overflow: 'hidden',
  },
}));

export default useStyles;
