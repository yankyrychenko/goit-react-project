import { createAction } from '@reduxjs/toolkit';

const incomeCategRequest = createAction('transactions/incomeCategRequest');
const incomeCategSuccess = createAction('transactions/incomeCategSuccess');
const incomeCategError = createAction('transactions/incomeCategError');

const expenseCategRequest = createAction('transactions/expenseCategRequest');
const expenseCategSuccess = createAction('transactions/expenseCategSuccess');
const expenseCategError = createAction('transactions/expenseCategError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  incomeCategRequest,
  incomeCategSuccess,
  incomeCategError,
  expenseCategRequest,
  expenseCategSuccess,
  expenseCategError,
};
