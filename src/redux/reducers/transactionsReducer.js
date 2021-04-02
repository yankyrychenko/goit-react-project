import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/transactionsActions';
import actionDelete from '../actions/transactionDeleteActions'

const incomes = createReducer(
  {},
  {
    [actions.incomeGetSuccess]: (_, { payload }) => payload,
    [actions.incomePostSuccess]: (state, { payload }) => ({
      ...state,
      incomes: [...state.incomes, payload.transaction],
    }),
    // [actionDelete.transactionDeleteSuccess]: (state, {payload}) =>   state.filter(({ id }) => id !== payload)
    // [actionDelete.transactionDeleteSuccess]: (state, {payload}) =>   state.filter(item => item.id !== payload)
    // [actionDelete.transactionDeleteSuccess]: (state, {payload}) =>   ({
    //   ...state,
    //   incomes: [state.filter(item => item._id !== payload.transaction.incomes)],
    // }),
  }
);

const expenses = createReducer(
  {},
  {
    [actions.expenseGetSuccess]: (_, { payload }) => payload,
    [actions.expensePostSuccess]: (state, { payload }) => ({
      ...state,
      expenses: [...state.expenses, payload.transaction],
    }),
  }
);

export default combineReducers({
  incomes,
  expenses,
});
