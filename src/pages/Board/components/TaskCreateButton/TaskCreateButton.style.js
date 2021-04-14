import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: theme.spacing(7),
  },
  createBtn: {
    width: '288px',
    minHeight: '40px',
    display: 'flex',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: '0',
    marginTop: '-4px',
    transition: theme.customTransition,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
  },
  createIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
