import React from 'react';
import { connect } from 'react-redux';
import { setIsLoggedIn } from '../../store/auth';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// стоковый способ стилизации Material UI компонентов
// единый объект с классами в котором описываем стили конкретного компонента
const useStyles = makeStyles({
  button: {
    marginLeft: '30px',
  }
});

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 50px;
`;

// способ стилизации Material UI компонентов, с помощью сторонней библиотеки Styled Components
//! но почему то не все свойства можно стилизовать таким образом
//! марджины например стилизуются только стоковым методом makeStyles()
//! хотя если переопределить марджины стоковым метотодом, то они начнут меняться с помощью Styled Components
const StyledButton = styled(Button)`
  width: 100px;
  height: 50px;
`;

function Main(props) {
  const classes = useStyles();

  return (
    <StyledMain>
      <h1>Main</h1>
      <StyledButton
        className={classes.button}
        type="button"
        variant="contained"
        color="primary"
        onClick={() => props.onSetIsLoggedIn(false)}
      >
        Sign Out
      </StyledButton>
    </StyledMain>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSetIsLoggedIn: (isLoggedIn) => dispatch(setIsLoggedIn(isLoggedIn)),
});

export default connect(null, mapDispatchToProps)(Main);
