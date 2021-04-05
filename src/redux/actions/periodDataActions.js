import { createAction } from '@reduxjs/toolkit';

const periodDataGetRequest = createAction('transactions/periodDataGetRequest');
const periodDataGetSuccess = createAction('transactions/periodDataGetSuccess');
const periodDataGetError = createAction('transactions/periodDataGetError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  periodDataGetRequest,
  periodDataGetSuccess,
  periodDataGetError,
};
