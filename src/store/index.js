import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/users';
import { boardsReducer } from './reducers/boards';
import { columnsReducer } from './reducers/columns';
import { tasksReducer } from './reducers/tasks';

const store = configureStore({
  reducer: {
    users: usersReducer,
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
  },
});

export default store;
