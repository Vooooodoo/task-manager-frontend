/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  allColumns: [],
};

const setAllColumns = createAction(actionTypes.SET_ALL_COLUMNS);

const columnsReducer = createReducer(initialState, {
  [setAllColumns]: (state, action) => {
    state.allColumns = action.payload;
  },
});

export { columnsReducer, setAllColumns };
