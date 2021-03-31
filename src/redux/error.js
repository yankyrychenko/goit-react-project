import { createReducer } from '@reduxjs/toolkit';
import auth from './actions/authActions';
import categories from './actions/categoriesActions';
import expense from './actions/expenseActions';
import income from './actions/incomeActions';
import periodData from './actions/periodDataActions';
import transactionDelete from './actions/transactionDeleteActions';

const intialState = null;

const errorReducer = createReducer(intialState, {
  [auth.signUpError]: (_, { payload }) => payload,
  [auth.logInError]: (_, { payload }) => payload,
  [auth.logOutError]: (_, { payload }) => payload,
  [auth.getCurrentUserError]: (_, { payload }) => payload,
  [categories.incomeCategError]: (_, { payload }) => payload,
  [categories.expenseCategError]: (_, { payload }) => payload,
  [expense.expenseGetError]: (_, { payload }) => payload,
  [expense.expensePostError]: (_, { payload }) => payload,
  [income.incomeGetError]: (_, { payload }) => payload,
  [income.incomePostError]: (_, { payload }) => payload,
  [periodData.periodDataGetError]: (_, { payload }) => payload,
  [transactionDelete.transactionDeleteError]: (_, { payload }) => payload,
});

export default errorReducer;
