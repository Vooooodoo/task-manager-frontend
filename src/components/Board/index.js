import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
`;

function Board() {
  return (
    <StyledMain>
      <h1>Board</h1>
    </StyledMain>
  );
}

export default Board;
