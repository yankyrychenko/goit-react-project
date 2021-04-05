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
  [transactionDelete.transactionIncomeDeleteError]: (_, { payload }) => payload,
  [transactionDelete.transactionExpenseDeleteError]: (_, { payload }) =>
    payload,
  [auth.signUpRequest]: () => intialState,
  [auth.logInRequest]: () => intialState,
  [auth.logOutRequest]: () => intialState,
  [auth.getCurrentUserRequest]: () => intialState,
  [categories.incomeCategRequest]: () => intialState,
  [categories.expenseCategRequest]: () => intialState,
  [transactions.expenseGetRequest]: () => intialState,
  [transactions.expensePostRequest]: () => intialState,
  [transactions.incomeGetRequest]: () => intialState,
  [transactions.incomePostRequest]: () => intialState,
  [periodData.periodDataGetRequest]: () => intialState,
  [transactionDelete.transactionDeleteRequest]: () => intialState,
});

export default errorReducer;
