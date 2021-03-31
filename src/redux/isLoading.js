import { createReducer } from '@reduxjs/toolkit';

const intialState = false;

const loadingReducer = createReducer(intialState, {});

export default loadingReducer;
