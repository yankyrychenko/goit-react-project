import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
  [authActions.signUpSuccess]: (_, { payload }) => payload.user,
  [authActions.logInSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.signUpSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.signUpSuccess]: () => true,
  [authActions.logInSuccess]: () => true,
  [authActions.signUpError]: () => false,
  [authActions.logInError]: () => false,
  [authActions.logOutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
