import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/transactionsActions';
import actionAuth from '../actions/authActions';
import actionDelete from '../actions/transactionDeleteActions';

const initialState = {};

const incomes = createReducer(initialState, {
  [actions.incomeGetSuccess]: (_, { payload }) => payload,
  [actions.incomePostSuccess]: (state, { payload }) => ({
    ...state,
    incomes: [...state.incomes, payload.transaction],
  }),
  [actionDelete.transactionIncomeDeleteSuccess]: (state, { payload }) => ({
    ...state,
    incomes: state.incomes.filter(item => item._id !== payload.id),
  }),
  [actionAuth.logOutSuccess]: (_, __) => initialState,
});

const expenses = createReducer(initialState, {
  [actions.expenseGetSuccess]: (_, { payload }) => payload,
  [actions.expensePostSuccess]: (state, { payload }) => ({
    ...state,
    expenses: [...state.expenses, payload.transaction],
  }),
  [actionDelete.transactionExpenceDeleteSuccess]: (state, { payload }) => ({
    ...state,
    expenses: state.expenses.filter(item => item._id !== payload.id),
  }),
  [actionAuth.logOutSuccess]: (_, __) => initialState,
});

export default combineReducers({
  incomes,
  expenses,
});
