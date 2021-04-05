import { createAction } from '@reduxjs/toolkit';

const incomePostRequest = createAction('transactions/incomePostRequest');
const incomePostSuccess = createAction('transactions/incomePostSuccess');
const incomePostError = createAction('transactions/incomePostError');

const incomeGetRequest = createAction('transactions/incomeGetRequest');
const incomeGetSuccess = createAction('transactions/incomeGetSuccess');
const incomeGetError = createAction('transactions/incomeGetError');

const expensePostRequest = createAction('transactions/expensePostRequest');
const expensePostSuccess = createAction('transactions/expensePostSuccess');
const expensePostError = createAction('transactions/expensePostError');

const expenseGetRequest = createAction('transactions/expenseGetRequest');
const expenseGetSuccess = createAction('transactions/expenseGetSuccess');
const expenseGetError = createAction('transactions/expenseGetError');

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
