import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/categoriesActions';

const categories = createReducer([], {
  [actions.incomeCategSuccess]: (_, { payload }) => payload,
  [actions.expenseCategSuccess]: (_, { payload }) => payload,
});

export default categories;
