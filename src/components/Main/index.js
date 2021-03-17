import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
`

function Main() {
  return (
    <StyledMain>
      <h1>Main</h1>
    </StyledMain>
  );
}

export default Main;
