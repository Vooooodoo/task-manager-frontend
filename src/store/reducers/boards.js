/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  allBoards: [],
  allColumns: [],
  allTasks: [],
};

const setAllBoards = createAction(actionTypes.SET_ALL_BOARDS);
const setAllColumns = createAction(actionTypes.SET_ALL_COLUMNS);
const setAllTasks = createAction(actionTypes.SET_ALL_TASKS);

const boardsReducer = createReducer(initialState, {
  [setAllBoards]: (state, action) => {
    state.allBoards = action.payload;
  },
  [setAllColumns]: (state, action) => {
    state.allColumns = action.payload;
  },
  [setAllTasks]: (state, action) => {
    state.allTasks = action.payload;
  },
});

export {
  boardsReducer,
  setAllBoards,
  setAllColumns,
  setAllTasks,
};
