import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 444px;
  min-height: 65px;
  padding: 16px;
  box-sizing: border-box;
  margin: 0 auto;
`;

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
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </StyledFooter>
  );
}

export default Footer;
