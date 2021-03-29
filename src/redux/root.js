import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducers } from './auth';
import { categoriesReducer } from './categories';
import { transactionsReducer } from './transactions';
import error from './error';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducers),
  categories: categoriesReducer,
  transactions: transactionsReducer,
  error,
  isLoading: false,
});
