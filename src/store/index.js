import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/users';
import { boardsReducer } from './reducers/boards';

const store = configureStore({
  reducer: {
    users: usersReducer,
    boards: boardsReducer,
  },
});

export default store;
