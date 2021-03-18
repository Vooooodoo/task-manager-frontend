import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
`;

function Profile() {
  return (
    <StyledMain>
      <h1>Profile</h1>
    </StyledMain>
  );
}

export default Profile;
