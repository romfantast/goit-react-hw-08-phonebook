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

const setDataWhenFullfield = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const loading = state => {
  state.isLoading = true;
};
const endLoading = state => {
  state.isLoading = false;
};

const resetWhenLogout = state => {
  state.user = {
    name: null,
    email: null,
  };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

const setWhenFullfield = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isFetchingCurrent = false;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(authOperations.logIn.pending, loading)
      .addCase(authOperations.logOut.pending, loading)
      .addCase(authOperations.fetchCurrentUser.pending, loading)

      .addCase(authOperations.register.fulfilled, setDataWhenFullfield)
      .addCase(authOperations.logIn.fulfilled, setDataWhenFullfield)
      .addCase(authOperations.logOut.fulfilled, resetWhenLogout)
      .addCase(authOperations.fetchCurrentUser.fulfilled, setWhenFullfield)

      .addCase(authOperations.register.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.rejected, endLoading)
      .addCase(authOperations.logOut.rejected, endLoading)
      .addCase(authOperations.fetchCurrentUser.rejected, endLoading);
  },
});

const persistConfigAuth = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfigAuth, authSlice.reducer);
