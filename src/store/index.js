import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { usersReducer } from './users';
import { boardsReducer } from './boards';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    boards: boardsReducer,
  },
});

export default store;
