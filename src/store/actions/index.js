import * as actionTypes from '../constants/actionTypes'

const setIsLoggedIn = isLoggedIn => ({
  type: actionTypes.SET_IS_LOGGED_IN,
  payload: isLoggedIn,
});

export {
  setIsLoggedIn,
};
