import { createAction } from '@reduxjs/toolkit';

const periodDataGetRequest = createAction('auth/periodDataGetRequest');
const periodDataGetSuccess = createAction('auth/periodDataGetSuccess');
const periodDataGetError = createAction('auth/periodDataGetError');

export default {
  periodDataGetRequest,
  periodDataGetSuccess,
  periodDataGetError,
};
