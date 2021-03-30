import { createAction } from '@reduxjs/toolkit';

const signUpRequest = createAction('auth/signUpRequest');
const signUpSuccess = createAction('auth/signUpSuccess');
const signUpError = createAction('auth/signUpError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction('auth/logInSuccess');
const logInError = createAction('auth/logInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

export default {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
};
