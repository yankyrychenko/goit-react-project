import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducers';
import transactionsReducer from './reducers/transactionsReducer';
import categoriesReducer from './reducers/categoriesReducers';
import periodDataReducer from './reducers/periodDataReducers';
import error from './error';
import loadingReducer from './isLoading';
import activeCategoryReducer from './reducers/activeCategoryReducer';
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
  error,
  isLoading: loadingReducer,
  activeCategory:activeCategoryReducer,
});
