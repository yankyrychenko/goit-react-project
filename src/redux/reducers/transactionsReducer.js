import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/transactionsActions';

const transactionsReducer = createReducer(
  {},
  {
    [actions.incomeGetSuccess]: (_, { payload }) => payload,
    [actions.expenseGetSuccess]: (_, { payload }) => payload,
  },
);

export default transactionsReducer;
