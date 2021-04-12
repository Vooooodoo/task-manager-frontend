import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  delBtn: {
    position: 'absolute',
    top: '1px',
    right: '1px',
  },
  delIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
