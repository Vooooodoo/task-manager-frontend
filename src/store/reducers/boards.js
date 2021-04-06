/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  //! remove pyramid of doom
  allBoards: [
    {
      id: 1,
      name: 'Board1',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Board2',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Board3',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Board4',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Board5',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
  ],
};

const setBoards = createAction(actionTypes.SET_BOARDS);

const boardsReducer = createReducer(initialState, {
  [setBoards]: (state, action) => {
    state.allBoards = action.payload;
  },
});

export { boardsReducer, setBoards };
