import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import balanceActions from '../actions/balanceActions';
import transactionsActions from '../actions/transactionsActions';
import actionDelete from '../actions/transactionDeleteActions';

const userInitialState = {};
const user = createReducer(userInitialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.userData,
  [authActions.logOutSuccess]: () => userInitialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [balanceActions.addBalanceSuccess]: (state, { payload }) => ({
    ...state,
    balance: payload,
  }),
  [transactionsActions.incomePostSuccess]: (state, { payload }) => ({
    ...state,
    balance: payload.newBalance,
    transactions: [...state.transactions, payload.transaction],
  }),
  [transactionsActions.expensePostSuccess]: (state, { payload }) => ({
    ...state,
    balance: payload.newBalance,
    transactions: [...state.transactions, payload.transaction],
  }),
  [actionDelete.transactionDeleteSuccess]: (state, { payload }) => ({
    ...state,
    balance: payload.balance,
    transactions: state.transactions.filter(item => item._id !== payload.id),
  }),
  [actionDelete.transactionIncomeDeleteSuccess]: (state, { payload }) => ({
    ...state,
    balance: payload.balance,
    transactions: state.transactions.filter(item => item._id !== payload.id),
  }),
  [actionDelete.transactionExpenceDeleteSuccess]: (state, { payload }) => ({
    ...state,
    balance: payload.balance,
    transactions: state.transactions.filter(item => item._id !== payload.id),
  }),
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
  [authActions.getCurrentUserError]: () => false,
  [transactionsActions.incomeGetError]: () => false,
  [transactionsActions.incomePostError]: () => false,
  [transactionsActions.expenseGetError]: () => false,
  [transactionsActions.expensePostError]: () => false,
  [actionDelete.transactionDeleteError]: () => false,
  [actionDelete.transactionIncomeDeleteError]: () => false,
  [actionDelete.transactionExpenceDeleteError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
