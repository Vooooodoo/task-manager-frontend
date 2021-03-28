import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import StyledFooter from './style';

function Footer() {
  return (
    <StyledFooter>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link
          color="inherit"
          href="https://github.com/Vooooodoo"
          target="_blank"
        >
          Andrukhanenko Roman
        </Link>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </StyledFooter>
  );
}

export default Footer;
