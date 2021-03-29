import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.mainContainerMarginTop,
  },
  title: {
    display: 'inline',
    marginBottom: theme.spacing(3),
  },
  boardsList: {
    listStyle: 'none',
    padding: '0',
  },
  // boardNameEditBtn: {
  //   display: 'inline',
  // },
}));

export default useStyles;
