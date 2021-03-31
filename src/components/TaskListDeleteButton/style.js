import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  delBtn: {
    position: 'absolute',
    top: '10px',
    right: theme.spacing(1),
  },
  delIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
