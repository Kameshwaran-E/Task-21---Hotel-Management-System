import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      const tempUsers = state.users.filter((_, index) => {
        return index !== action.payload;
      });
      state.users = [...tempUsers];
    },
  },
});

export const { addUser, deleteUser } = userslice.actions;

export default userslice.reducer;
