import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(30),
    boxSizing: 'border-box',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
