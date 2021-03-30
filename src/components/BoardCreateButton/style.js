import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'grey',
    backgroundClip: 'content-box',
    minHeight: theme.spacing(25),
    transition: theme.customTransition,
    '&:hover': theme.customHover,
  },
  createBtn: {
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
