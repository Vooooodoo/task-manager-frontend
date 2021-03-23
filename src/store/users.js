/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  allUsers: [
    {
      id: 1,
      firstName: 'Albert',
      lastName: 'Einstein',
      email: 'albert@einstein.de',
      password: 12345678,
      about: 'Scientist.',
    },
  ],
};

const setUsers = createAction(actionTypes.SET_USERS);

const usersReducer = createReducer(initialState, {
  [setUsers]: (state, action) => {
    state.allUsers = action.payload;
  },
});

export { usersReducer, setUsers };
