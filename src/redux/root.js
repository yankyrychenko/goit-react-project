import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducers';
import incomeReducer from './reducers/incomeReducers';
import expenseReducer from './reducers/expenseReducers';
import categoriesReducer from './reducers/categoriesReducers';
import periodDataReducer from './reducers/periodDataReducers';
import error from './error';
import loadingReducer from './isLoading';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  transactions: combineReducers({
    income: incomeReducer,
    expense: expenseReducer,
  }),
  categories: categoriesReducer,
  periodData: periodDataReducer,
  error,
  isLoading: loadingReducer,
});
