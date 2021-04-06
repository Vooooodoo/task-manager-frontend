import { createMuiTheme } from '@material-ui/core/styles';

// add custom variables to the theme global object
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
