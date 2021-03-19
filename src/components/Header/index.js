import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
`;

function Header() {
  return (
    <StyledMain>
      <h1>Header</h1>
    </StyledMain>
  );
}

export default Header;
