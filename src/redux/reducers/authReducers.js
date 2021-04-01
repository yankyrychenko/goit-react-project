import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import balanceActions from '../actions/balanceActions'
import transactionsActions from '../actions/transactionsActions';

const userInitialState = { };
const user = createReducer(userInitialState, {
  [authActions.signUpSuccess]: (_, { payload }) => payload,
  [authActions.logInSuccess]: (_, { payload }) => payload.userData,
  [authActions.logOutSuccess]: () => userInitialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [balanceActions.addBalanceSuccess]: (state, { payload }) => ({...state, balance: payload})
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
  [authActions.getCurrentUserError]: () => false,
  [transactionsActions.expenseGetSuccess]: () => true,
  [transactionsActions.expenseGetError]: () => false,
  [transactionsActions.incomeGetSuccess]: () => true,
  [transactionsActions.incomeGetError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
