/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  allTasks: [],
};

const setAllTasks = createAction(actionTypes.SET_ALL_TASKS);

const tasksReducer = createReducer(initialState, {
  [setAllTasks]: (state, action) => {
    state.allTasks = action.payload;
  },
});

export { tasksReducer, setAllTasks };
