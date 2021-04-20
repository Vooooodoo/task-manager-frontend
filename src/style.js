import { createMuiTheme } from '@material-ui/core/styles';

// added custom variables to the theme global object
const theme = createMuiTheme({
  mainContainerMarginTop: '64px',
  customHover: {
    cursor: 'pointer',
    opacity: '.8',
  },
  customTransition: '.2s linear',
  iconColor: 'white',
  borderRadius: '4px',
});

export default theme;
