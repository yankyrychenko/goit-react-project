import { createAction } from '@reduxjs/toolkit';

const expenseGetRequest = createAction('auth/expenseGetRequest');
const expenseGetSuccess = createAction('auth/expenseGetSuccess');
const expenseGetError = createAction('auth/expenseGetError');

const expensePostRequest = createAction('auth/expensePostRequest');
const expensePostSuccess = createAction('auth/expensePostSuccess');
const expensePostError = createAction('auth/expensePostError');

export default {
  expenseGetRequest,
  expenseGetSuccess,
  expenseGetError,
  expensePostRequest,
  expensePostSuccess,
  expensePostError,
};
