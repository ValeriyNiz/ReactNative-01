import { createSlice } from '@reduxjs/toolkit';

const state = {
  userId: null,
  login: null,
  userPhoto: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
  },
});
