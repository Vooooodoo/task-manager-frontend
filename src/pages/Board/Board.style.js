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
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    listStyle: 'none',
    padding: '0',
    minHeight: '70vh',
    margin: '0',
    maxWidth: 'none',
  },
  column: {
    margin: theme.spacing(1),
  },
  boardNameEditBtn: {
    marginBottom: theme.spacing(2),
    color: 'black',
  },
}));

export default useStyles;
