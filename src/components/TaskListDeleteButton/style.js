import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  delBtn: {
    position: 'absolute',
    top: '6px',
    right: theme.spacing(1),
  },
  delIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
