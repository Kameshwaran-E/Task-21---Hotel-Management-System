import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/userslice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});
