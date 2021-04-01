import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducers';
import transactionsReducer from './reducers/transactionsReducer';
import categoriesReducer from './reducers/categoriesReducers';
import periodDataReducer from './reducers/periodDataReducers';
import balanceReducer from './reducers/balanceReducers'
import error from './error';
import loadingReducer from './isLoading';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  transactions: transactionsReducer,
  categories: categoriesReducer,
  periodData: periodDataReducer,
  balance : balanceReducer,
  error,
  isLoading: loadingReducer,
});
