import { createReducer } from '@reduxjs/toolkit';
import authActions from './actions/authActions';

const intialState = null;
const errorReducer = createReducer(intialState, {
  [authActions.signUpError]: (_, { payload }) => payload,
  [authActions.logInError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,

  [authActions.signUpRequest]: () => intialState,
  [authActions.logInRequest]: () => intialState,
  [authActions.logOutRequest]: () => intialState,
  [authActions.getCurrentUserRequest]: () => intialState,
});

export default errorReducer;
