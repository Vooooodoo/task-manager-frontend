/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  userBoards: [],
  board: {},
  boardColumns: [],
  columnTasks: [],
};

const setUserBoards = createAction(actionTypes.SET_USER_BOARDS);
const setBoard = createAction(actionTypes.SET_BOARD);
const setBoardColumns = createAction(actionTypes.SET_BOARD_COLUMNS);
const setColumnTasks = createAction(actionTypes.SET_COLUMN_TASKS);

const boardsReducer = createReducer(initialState, {
  [setUserBoards]: (state, action) => {
    state.userBoards = action.payload;
  },
  [setBoard]: (state, action) => {
    state.board = action.payload;
  },
  [setBoardColumns]: (state, action) => {
    state.boardColumns = action.payload;
  },
  [setColumnTasks]: (state, action) => {
    state.columnTasks = action.payload;
  },
});

export {
  boardsReducer,
  setUserBoards,
  setBoard,
  setBoardColumns,
  setColumnTasks,
};
