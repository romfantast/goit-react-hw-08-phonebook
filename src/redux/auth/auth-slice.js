import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, _) {
      state.isLoading = false;
    },

    [authOperations.logIn.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected](state, _) {
      state.isLoading = false;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrent = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, _) {
      state.isFetchingCurrent = false;
    },
  },
});

const persistConfigAuth = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfigAuth, authSlice.reducer);
