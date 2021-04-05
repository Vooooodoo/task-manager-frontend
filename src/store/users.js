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
      about: 'Scientist.',
    },
  ],
  authorizedUser: {
    id: 1,
    firstName: 'Albert',
    lastName: 'Einstein',
    email: 'albert@einstein.de',
    about: 'Scientist.',
  },
};

const setAllUsers = createAction(actionTypes.SET_ALL_USERS);
const setUser = createAction(actionTypes.SET_USER);

const usersReducer = createReducer(initialState, {
  [setAllUsers]: (state, action) => {
    state.allUsers = action.payload;
  },
  [setUser]: (state, action) => {
    state.authorizedUser = action.payload;
  },
});

export { usersReducer, setAllUsers, setUser };
