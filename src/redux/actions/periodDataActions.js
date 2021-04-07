import { createAction } from '@reduxjs/toolkit';

const periodDataGetRequest = createAction('transactions/periodDataGetRequest');
const periodDataGetSuccess = createAction('transactions/periodDataGetSuccess');
const periodDataGetError = createAction('transactions/periodDataGetError');
const periodDataClear=createAction('periodData/ getClear');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  periodDataGetRequest,
  periodDataGetSuccess,
  periodDataGetError,
  periodDataClear,
};
