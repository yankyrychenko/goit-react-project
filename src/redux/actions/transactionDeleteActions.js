import { createAction } from '@reduxjs/toolkit';

const transactionDeleteRequest = createAction('auth/transactionDeleteRequest');
const transactionDeleteSuccess = createAction('auth/transactionDeleteSuccess');
const transactionDeleteError = createAction('auth/transactionDeleteError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  transactionDeleteRequest,
  transactionDeleteSuccess,
  transactionDeleteError,
};
