import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
  }

  return state;
}

export default reducer;
