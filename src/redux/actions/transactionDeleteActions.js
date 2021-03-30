import { createAction } from '@reduxjs/toolkit';

const transactionDeleteRequest = createAction('auth/transactionDeleteRequest');
const transactionDeleteSuccess = createAction('auth/transactionDeleteSuccess');
const transactionDeleteError = createAction('auth/transactionDeleteError');

export default {
  transactionDeleteRequest,
  transactionDeleteSuccess,
  transactionDeleteError,
};
