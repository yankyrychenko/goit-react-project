import { createAction } from '@reduxjs/toolkit';

const incomeCategRequest = createAction('auth/incomeCategRequest');
const incomeCategSuccess = createAction('auth/incomeCategSuccess');
const incomeCategError = createAction('auth/incomeCategError');

const expenseCategRequest = createAction('auth/expenseCategRequest');
const expenseCategSuccess = createAction('auth/expenseCategSuccess');
const expenseCategError = createAction('auth/expenseCategError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  incomeCategRequest,
  incomeCategSuccess,
  incomeCategError,
  expenseCategRequest,
  expenseCategSuccess,
  expenseCategError,
};
