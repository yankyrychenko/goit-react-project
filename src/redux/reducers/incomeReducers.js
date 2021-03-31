import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/incomeActions';

const incomeReducer = createReducer(
  {},
  {
    [actions.incomeGetSuccess]: (_, { payload }) => payload,
  },
);

export default incomeReducer;
