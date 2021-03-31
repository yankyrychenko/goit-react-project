import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/periodDataActions';

const intialState = {};

const periodDataReducers = createReducer(intialState, {
  [actions.periodDataGetSuccess]: (state, { payload }) => payload,
});

export default periodDataReducers;
