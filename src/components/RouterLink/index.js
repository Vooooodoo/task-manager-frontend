import React from 'react';
import StyledLink from './style';

function RouterLink({ route, text }) {
  return (<StyledLink to={route}>{text}</StyledLink>);
}

export default RouterLink;
