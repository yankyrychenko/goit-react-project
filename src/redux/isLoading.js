import { createReducer } from '@reduxjs/toolkit';
import authActions from './actions/authActions';
import categoriesActions from './actions/categoriesActions';
import transactionsActions from './actions/transactionsActions';
import periodDataActions from './actions/periodDataActions';
import transactionDeleteActions from './actions/transactionDeleteActions';

const intialState = false;

const loadingReducer = createReducer(intialState, {
  [authActions.signUpRequest]: (_, __) => true,
  [authActions.signUpSuccess]: (_, __) => false,
  [authActions.signUpError]: (_, __) => false,

  [authActions.logInRequest]: (_, __) => true,
  [authActions.logInSuccess]: (_, __) => false,
  [authActions.logInError]: (_, __) => false,

  [authActions.logOutRequest]: (_, __) => true,
  [authActions.logOutSuccess]: (_, __) => false,
  [authActions.logOutError]: (_, __) => false,

  [authActions.getCurrentUserRequest]: (_, __) => true,
  [authActions.getCurrentUserSuccess]: (_, __) => false,
  [authActions.getCurrentUserError]: (_, __) => false,

  [categoriesActions.incomeCategRequest]: (_, __) => true,
  [categoriesActions.incomeCategSuccess]: (_, __) => false,
  [categoriesActions.incomeCategError]: (_, __) => false,

  [categoriesActions.expenseCategRequest]: (_, __) => true,
  [categoriesActions.expenseCategSuccess]: (_, __) => false,
  [categoriesActions.expenseCategError]: (_, __) => false,

  [transactionsActions.expenseGetRequest]: (_, __) => true,
  [transactionsActions.expenseGetSuccess]: (_, __) => false,
  [transactionsActions.expenseGetError]: (_, __) => false,

  [transactionsActions.expensePostRequest]: (_, __) => true,
  [transactionsActions.expensePostSuccess]: (_, __) => false,
  [transactionsActions.expensePostError]: (_, __) => false,

  [transactionsActions.incomeGetRequest]: (_, __) => true,
  [transactionsActions.incomeGetSuccess]: (_, __) => false,
  [transactionsActions.incomeGetError]: (_, __) => false,

  [transactionsActions.incomePostRequest]: (_, __) => true,
  [transactionsActions.incomePostSuccess]: (_, __) => false,
  [transactionsActions.incomePostError]: (_, __) => false,

  [periodDataActions.periodDataGetRequest]: (_, __) => true,
  [periodDataActions.periodDataGetSuccess]: (_, __) => false,
  [periodDataActions.periodDataGetError]: (_, __) => false,

  [transactionDeleteActions.transactionDeleteRequest]: (_, __) => true,
  [transactionDeleteActions.transactionDeleteSuccess]: (_, __) => false,
  [transactionDeleteActions.transactionDeleteError]: (_, __) => false,
});

export default loadingReducer;
