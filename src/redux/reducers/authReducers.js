import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import expenseActions from '../actions/expenseActions';
import incomeActions from '../actions/incomeActions';

const userInitialState = { email: null };
const user = createReducer(userInitialState, {
  [authActions.signUpSuccess]: (_, { payload }) => payload,
  [authActions.logInSuccess]: (_, { payload }) => payload.userData,
  [authActions.logOutSuccess]: () => userInitialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  // [authActions.googleLoginSuccess]: (_, { payload }) => payload,
});

const tokenInitialState = null;
const token = createReducer(tokenInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logOutSuccess]: () => tokenInitialState,
  [authActions.setGoogleToken]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.signUpSuccess]: () => true,
  [authActions.logInSuccess]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => true,
  [expenseActions.expenseGetSuccess]: () => true,
  [incomeActions.incomeGetSuccess]: () => true,
  [authActions.getCurrentUserError]: () => false,
  [expenseActions.expenseGetError]: () => false,
  [incomeActions.incomeGetError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
