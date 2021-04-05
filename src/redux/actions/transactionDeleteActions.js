import { createAction } from '@reduxjs/toolkit';

const transactionDeleteRequest = createAction(
  'transactions/transactionDeleteRequest',
);
const transactionDeleteSuccess = createAction(
  'transactions/transactionDeleteSuccess',
);
const transactionDeleteError = createAction(
  'transactions/transactionDeleteError',
);

const transactionIncomeDeleteRequest = createAction(
  'transactions/transactionIncomeDeleteRequest',
);
const transactionIncomeDeleteSuccess = createAction(
  'transactions/transactionIncomeDeleteSuccess',
);
const transactionIncomeDeleteError = createAction(
  'transactions/transactionIncomeDeleteError',
);

const transactionExpenceDeleteRequest = createAction(
  'transactions/transactionExpenceDeleteRequest',
);
const transactionExpenceDeleteSuccess = createAction(
  'transactions/transactionExpenceDeleteSuccess',
);
const transactionExpenceDeleteError = createAction(
  'transactions/transactionExpenceDeleteError',
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
