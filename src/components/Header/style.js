import { makeStyles } from '@material-ui/core/styles';

// стоковый способ стилизации Material UI компонентов
// единый объект с классами в котором описываем стили конкретного компонента
// также есть доступ к глобальному объекту theme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  routerMenuLink: {
    textDecoration: 'none',
    color: '#000000DE',
    width: '100%',
    padding: '6px 16px',
  },
  routerMenuItem: {
    padding: '0',
  },
  routerHomeLink: {
    display: 'flex',
    alignItems: 'center',
  },
  homeIcon: {
    color: theme.iconColor,
  },
}));

export default useStyles;
