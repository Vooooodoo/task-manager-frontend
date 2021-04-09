/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  allBoards: [],
};

const setAllBoards = createAction(actionTypes.SET_ALL_BOARDS);

const boardsReducer = createReducer(initialState, {
  [setAllBoards]: (state, action) => {
    state.allBoards = action.payload;
  },
});

export { boardsReducer, setAllBoards };
