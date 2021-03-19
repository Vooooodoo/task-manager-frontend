import * as actionTypes from './constants/actionTypes';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const setIsLoggedIn = createAction(actionTypes.SET_IS_LOGGED_IN);

const authReducer = createReducer(initialState, {
  [setIsLoggedIn]: (state, action) => {
    state.isLoggedIn = action.payload;
  }
});

export { authReducer, setIsLoggedIn };
