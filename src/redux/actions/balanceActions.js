import { createAction } from '@reduxjs/toolkit';


const addBalanceRequest = createAction('user/balanceAddRequest');
const addBalanceSuccess = createAction('user/balanceAddSuccess');
const addBalanceError = createAction('user/balanceAddError');

// eslint-disable-next-line
export default {
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
};
