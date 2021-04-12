import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.mainContainerMarginTop,
  },
  title: {
    display: 'inline',
    marginBottom: theme.spacing(3),
  },
  columnsList: {
    overflowX: 'scroll',
    listStyle: 'none',
    padding: '0',
  },
  boardNameEditBtn: {
    marginBottom: theme.spacing(2),
    color: 'black',
  },
}));

export default useStyles;
