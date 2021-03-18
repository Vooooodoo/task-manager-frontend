import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
`

function NotFound() {
  return (
    <StyledMain>
      <h1>Page not found</h1>
    </StyledMain>
  );
}

export default NotFound;
