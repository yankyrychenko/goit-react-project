import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/expenseActions';

const expenseReducer = createReducer(
  {},
  {
    [actions.expenseGetSuccess]: (_, { payload }) => payload,
  },
);

export default expenseReducer;
