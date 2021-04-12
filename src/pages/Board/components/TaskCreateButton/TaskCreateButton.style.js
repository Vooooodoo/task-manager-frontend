import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'block',
    width: '300px',
    backgroundColor: 'grey',
    backgroundClip: 'content-box',
    minHeight: theme.spacing(7),
    transition: theme.customTransition,
    '&:hover': theme.customHover,
  },
  createBtn: {
    display: 'flex',
    width: '100%',
    color: 'white',
  },
  createIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
