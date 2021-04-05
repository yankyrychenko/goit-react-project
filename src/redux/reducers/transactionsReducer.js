import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/transactionsActions';
import actionDelete from '../actions/transactionDeleteActions';
import authActions from '../actions/authActions';
const initial = {};

const incomes = createReducer(
  {},
  {
    [actions.incomeGetSuccess]: (_, { payload }) => payload,
    [actions.incomePostSuccess]: (state, { payload }) => ({
      ...state,
      incomes: [...state.incomes, payload.transaction],
    }),
    [actionDelete.transactionIncomeDeleteSuccess]: (state, { payload }) => ({
      ...state,
      incomes: state.incomes.filter(item => item._id !== payload),
    }),
    [authActions.logOutSuccess]: (_, { payload }) => initial,
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
    [actionDelete.transactionExpenceDeleteSuccess]: (state, { payload }) => ({
      ...state,
      expenses: state.expenses.filter(item => item._id !== payload),
    }),
    [authActions.logOutSuccess]: (_, { payload }) => initial,
  },
);

export default combineReducers({
  incomes,
  expenses,
});
