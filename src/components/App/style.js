import { createMuiTheme } from '@material-ui/core/styles';

// добавим кастомные переменные в глобальный объект theme
const theme = createMuiTheme({
  mainContainerMarginTop: '64px',
  customHover: {
    cursor: 'pointer',
    opacity: '.8',
  },
  customTransition: '.2s linear',
  iconColor: 'white',
});

export default theme;
