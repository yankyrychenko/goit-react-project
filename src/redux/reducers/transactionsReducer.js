import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/transactionsActions';

const incomes = createReducer(
  {},
  {
    [actions.incomeGetSuccess]: (_, { payload }) => payload,
  },
);

const expenses = createReducer(
  {},
  {
    [actions.expenseGetSuccess]: (_, { payload }) => payload,
  },
);

export default combineReducers({
  incomes,
  expenses,
});
