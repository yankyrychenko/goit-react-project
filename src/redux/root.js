import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducers } from './auth';
import { incomeReducer } from './income';
import { expenseReducer } from './expense';
import { categoriesReducer } from './categories';
import { periodDataReducer } from './periodData';
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
