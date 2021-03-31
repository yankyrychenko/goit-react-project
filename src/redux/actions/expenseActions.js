import { createAction } from '@reduxjs/toolkit';

const expensePostRequest = createAction('auth/expensePostRequest');
const expensePostSuccess = createAction('auth/expensePostSuccess');
const expensePostError = createAction('auth/expensePostError');

const expenseGetRequest = createAction('auth/expenseGetRequest');
const expenseGetSuccess = createAction('auth/expenseGetSuccess');
const expenseGetError = createAction('auth/expenseGetError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  expenseGetRequest,
  expenseGetSuccess,
  expenseGetError,
  expensePostRequest,
  expensePostSuccess,
  expensePostError,
};
