import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  delBtn: {
    position: 'absolute',
    top: '-2px',
    right: '-3px',
  },
  delIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
