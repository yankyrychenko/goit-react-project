import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducers } from './reducers/authReducers';
import { incomeReducer } from './reducers/incomeReducers';
import { expenseReducer } from './reducers/expenseReducers';
import { categoriesReducer } from './reducers/categoriesReducers';
import { periodDataReducer } from './reducers/periodDataReducers';
import error from './error';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducers),
  transactions: {
    income: incomeReducer,
    expense: expenseReducer,
  },
  categories: categoriesReducer,
  periodData: periodDataReducer,
  error,
  isLoading: false,
});
