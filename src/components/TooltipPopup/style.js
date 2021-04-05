import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(-0.7),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
