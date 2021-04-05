import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'grey',
    backgroundClip: 'content-box',
    minHeight: theme.spacing(7),
    transition: theme.customTransition,
    '&:hover': theme.customHover,
  },
  createBtn: {
    width: '100%',
    height: '100%',
    color: 'white',
  },
  createIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
