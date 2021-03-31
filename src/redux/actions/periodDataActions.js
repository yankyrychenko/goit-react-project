import { createAction } from '@reduxjs/toolkit';

const periodDataGetRequest = createAction('auth/periodDataGetRequest');
const periodDataGetSuccess = createAction('auth/periodDataGetSuccess');
const periodDataGetError = createAction('auth/periodDataGetError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  periodDataGetRequest,
  periodDataGetSuccess,
  periodDataGetError,
};
