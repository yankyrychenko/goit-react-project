import { createAction } from '@reduxjs/toolkit';

const incomeGetRequest = createAction('auth/incomeGetRequest');
const incomeGetSuccess = createAction('auth/incomeGetSuccess');
const incomeGetError = createAction('auth/incomeGetError');

const incomePostRequest = createAction('auth/incomePostRequest');
const incomePostSuccess = createAction('auth/incomePostSuccess');
const incomePostError = createAction('auth/incomePostError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  incomeGetRequest,
  incomeGetSuccess,
  incomeGetError,
  incomePostRequest,
  incomePostSuccess,
  incomePostError,
};
