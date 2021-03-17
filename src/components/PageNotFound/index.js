import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
`

function PageNotFound() {
  return (
    <StyledMain>
      <h1>Page Not Found 404</h1>
    </StyledMain>
  )
}

export default PageNotFound;
