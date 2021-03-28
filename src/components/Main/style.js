import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.mainContainerMarginTop,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  boardsList: {
    listStyle: 'none',
    padding: '0',
  },
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
