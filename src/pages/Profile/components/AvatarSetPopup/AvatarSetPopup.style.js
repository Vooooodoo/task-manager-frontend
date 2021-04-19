import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(30),
    boxSizing: 'border-box',
  },
  fileInput: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
