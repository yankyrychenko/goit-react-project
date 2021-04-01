import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import balanceActions from '../actions/balanceActions'
import transactionsActions from '../actions/transactionsActions';

const userInitialState = { };
const user = createReducer(userInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData,
  [authActions.logOutSuccess]: () => userInitialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [balanceActions.addBalanceSuccess]: (state, { payload }) => ({...state, balance: payload})
});

const tokenInitialState = null;
const token = createReducer(tokenInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logOutSuccess]: () => tokenInitialState,
  [authActions.setGoogleToken]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.logInSuccess]: () => true,
  [authActions.logOutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => true,
  [transactionsActions.expenseGetSuccess]: () => true,
  // [transactionsActions.expenseGetError]: () => false, // ошибки тут не нужно обрабатывать, он и без него false будет
  [transactionsActions.incomeGetSuccess]: () => true,
  // [transactionsActions.incomeGetError]: () => false, // ошибки тут не нужно обрабатывать, он и без него false будет
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
