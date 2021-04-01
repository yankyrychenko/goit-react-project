import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/transactionsActions';

const incomes = createReducer(
  {},
  {
    [actions.incomeGetSuccess]: (_, { payload }) => payload,
    [actions.incomePostSuccess]: (state, { payload }) => ({
      ...state,
      incomes: [...state.incomes, payload.transaction],
    }),
  },
);

const expenses = createReducer(
  {},
  {
    [actions.expenseGetSuccess]: (_, { payload }) => payload,
    [actions.expensePostSuccess]: (state, { payload }) => ({
      ...state,
      expenses: [...state.expenses, payload.transaction],
    }),
  },
);

export default combineReducers({
  incomes,
  expenses,
});
