import { createReducer } from '@reduxjs/toolkit';
import authActions from './actions/authActions';
import categoriesActions from './actions/categoriesActions';
import expenseActions from './actions/expenseActions';
import incomeActions from './actions/incomeActions';
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

  [expenseActions.expenseGetRequest]: (_, __) => true,
  [expenseActions.expenseGetSuccess]: (_, __) => false,
  [expenseActions.expenseGetError]: (_, __) => false,

  [expenseActions.expensePostRequest]: (_, __) => true,
  [expenseActions.expensePostSuccess]: (_, __) => false,
  [expenseActions.expensePostError]: (_, __) => false,

  [incomeActions.incomeGetRequest]: (_, __) => true,
  [incomeActions.incomeGetSuccess]: (_, __) => false,
  [incomeActions.incomeGetError]: (_, __) => false,

  [incomeActions.incomePostRequest]: (_, __) => true,
  [incomeActions.incomePostSuccess]: (_, __) => false,
  [incomeActions.incomePostError]: (_, __) => false,

  [periodDataActions.periodDataGetRequest]: (_, __) => true,
  [periodDataActions.periodDataGetSuccess]: (_, __) => false,
  [periodDataActions.periodDataGetError]: (_, __) => false,

  [transactionDeleteActions.transactionDeleteRequest]: (_, __) => true,
  [transactionDeleteActions.transactionDeleteSuccess]: (_, __) => false,
  [transactionDeleteActions.transactionDeleteError]: (_, __) => false,
});

export default loadingReducer;
