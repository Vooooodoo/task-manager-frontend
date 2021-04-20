/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  user: {},
};

const setUser = createAction(actionTypes.SET_USER);

const usersReducer = createReducer(initialState, {
  [setUser]: (state, action) => {
    state.user = action.payload;
  },
});

export { usersReducer, setUser };
