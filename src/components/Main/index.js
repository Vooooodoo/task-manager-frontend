import React from 'react';
import { connect } from 'react-redux';
import { setIsLoggedIn } from '../../store/auth';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 50px;
`;

function Main(props) {
  return (
    <StyledMain>
      <h1>Main</h1>
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => props.onSetIsLoggedIn(false)}
      >
        Sign Out
      </Button>
    </StyledMain>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSetIsLoggedIn: (isLoggedIn) => dispatch(setIsLoggedIn(isLoggedIn)),
});

export default connect(null, mapDispatchToProps)(Main);
