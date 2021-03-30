import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const userInitialState = { email: null };
const user = createReducer(userInitialState, {
  [authActions.signUpSuccess]: (_, { payload }) => payload,
  [authActions.logInSuccess]: (_, { payload }) => payload.userData,
  [authActions.logOutSuccess]: () => userInitialState,
});

const tokenInitialState = null;
const token = createReducer(tokenInitialState, {
  [authActions.signUpSuccess]: (_, { payload }) => payload,
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logOutSuccess]: () => tokenInitialState,
});

const isAuthenticated = createReducer(false, {
  [authActions.signUpSuccess]: () => true,
  [authActions.logInSuccess]: () => true,
  [authActions.logOutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
