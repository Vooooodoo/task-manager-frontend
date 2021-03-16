import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
`

function Main(props) {
  return (
    <StyledMain>
      <h1>Follow the white rabbit...</h1>
    </StyledMain>
  );
}

export default Main;
