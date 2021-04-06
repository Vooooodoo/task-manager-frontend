import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth';
import { usersReducer } from './reducers/users';
import { boardsReducer } from './reducers/boards';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    boards: boardsReducer,
  },
});

export default store;
