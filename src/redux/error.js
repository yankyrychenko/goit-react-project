import { createReducer } from '@reduxjs/toolkit';
import auth from './actions/authActions';
import categories from './actions/categoriesActions';
import transactions from './actions/transactionsActions';
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
  [transactions.expenseGetError]: (_, { payload }) => payload,
  [transactions.expensePostError]: (_, { payload }) => payload,
  [transactions.incomeGetError]: (_, { payload }) => payload,
  [transactions.incomePostError]: (_, { payload }) => payload,
  [periodData.periodDataGetError]: (_, { payload }) => payload,
  [transactionDelete.transactionDeleteError]: (_, { payload }) => payload,
});

export default errorReducer;
