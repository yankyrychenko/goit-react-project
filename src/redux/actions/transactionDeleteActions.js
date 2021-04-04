import { createAction } from '@reduxjs/toolkit';

const transactionDeleteRequest = createAction('auth/transactionDeleteRequest');
const transactionDeleteSuccess = createAction('auth/transactionDeleteSuccess');
const transactionDeleteError = createAction('auth/transactionDeleteError');

const transactionIncomeDeleteRequest = createAction(
  'auth/transactionIncomeDeleteRequest',
);
const transactionIncomeDeleteSuccess = createAction(
  'auth/transactionIncomeDeleteSuccess',
);
const transactionIncomeDeleteError = createAction(
  'auth/transactionIncomeDeleteError',
);

const transactionExpenceDeleteRequest = createAction(
  'auth/transactionExpenceDeleteRequest',
);
const transactionExpenceDeleteSuccess = createAction(
  'auth/transactionExpenceDeleteSuccess',
);
const transactionExpenceDeleteError = createAction(
  'auth/transactionExpenceDeleteError',
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  transactionDeleteRequest,
  transactionDeleteSuccess,
  transactionDeleteError,
  transactionIncomeDeleteSuccess,
  transactionIncomeDeleteRequest,
  transactionIncomeDeleteError,
  transactionExpenceDeleteSuccess,
  transactionExpenceDeleteRequest,
  transactionExpenceDeleteError,
};
