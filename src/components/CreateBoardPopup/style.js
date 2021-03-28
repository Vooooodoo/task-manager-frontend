import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  createBoardPopup: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(30),
    boxSizing: 'border-box',
  },
  createBoardInput: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
