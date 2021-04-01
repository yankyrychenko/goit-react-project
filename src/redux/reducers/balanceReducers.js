import { createReducer } from "@reduxjs/toolkit"
import actions from '../actions/balanceActions'

const balanceReducers = createReducer([], {
  [actions.addBalanceSuccess] : (state, {payload}) => [...state, payload]
}
)

export default balanceReducers