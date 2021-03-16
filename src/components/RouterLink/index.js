import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3f51b5;
  font-size: 14px;

  :hover {
    text-decoration: underline;
  }
`;

function RouterLink(props) {
  return (
    <StyledLink to={props.route}>{props.text}</StyledLink>
  );
}

export default RouterLink;
