import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #3f51b5;
  font-size: 14px;
  text-align: right;

  :hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
