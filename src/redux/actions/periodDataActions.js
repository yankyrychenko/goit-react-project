import { createAction } from '@reduxjs/toolkit';

const periodDataGetRequest = createAction('auth/incomeGetRequest');
const periodDataGetSuccess = createAction('auth/periodDataGetSuccess');
const periodDataGetError = createAction('auth/periodDataGetError');

export default {
  periodDataGetRequest,
  periodDataGetSuccess,
  periodDataGetError,
};
