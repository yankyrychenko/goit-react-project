import { createAction } from '@reduxjs/toolkit';

const incomePostRequest = createAction('auth/incomePostRequest');
const incomePostSuccess = createAction('auth/incomePostSuccess');
const incomePostError = createAction('auth/incomePostError');

const incomeGetRequest = createAction('auth/incomeGetRequest');
const incomeGetSuccess = createAction('auth/incomeGetSuccess');
const incomeGetError = createAction('auth/incomeGetError');

const expensePostRequest = createAction('auth/expensePostRequest');
const expensePostSuccess = createAction('auth/expensePostSuccess');
const expensePostError = createAction('auth/expensePostError');

const expenseGetRequest = createAction('auth/expenseGetRequest');
const expenseGetSuccess = createAction('auth/expenseGetSuccess');
const expenseGetError = createAction('auth/expenseGetError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  incomeGetRequest,
  incomeGetSuccess,
  incomeGetError,
  incomePostRequest,
  incomePostSuccess,
  incomePostError,
  expenseGetRequest,
  expenseGetSuccess,
  expenseGetError,
  expensePostRequest,
  expensePostSuccess,
  expensePostError,
};
