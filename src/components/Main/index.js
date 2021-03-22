import React from 'react';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button';

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
//! хотя если переопределить марджины стоковым метотодом,
//! то они начнут меняться с помощью Styled Components
// const StyledButton = styled(Button)`
//   width: 100px;
//   height: 50px;
// `;

function Main() {
  // const classes = useStyles();

  return (
    <StyledMain>
      <h1>Main</h1>
    </StyledMain>
  );
}

export default Main;
