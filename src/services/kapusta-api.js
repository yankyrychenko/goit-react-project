import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

/* SET && UNSET TOKEN */
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* AUTHORIZATION */
const signUp = credentials => axios.post('/auth/register', credentials);
const logIn = credentials => axios.post('/auth/login', credentials);
const logOut = () => axios.post('/auth/logout');

/* TRANSACTIONS */
const incomePost = data => axios.post('/transaction/income', data);
const incomeGet = () => axios.get('/transaction/income');
const expensePost = data => axios.post('/transaction/expense', data);
const expenseGet = () => axios.get('/transaction/expense');
const transactionDelete = transactionId =>
  axios.delete(`/transaction/${transactionId}`);
const incomeCategoriesGet = () => axios.get('/transaction/income-categories');
const expenseCategoriesGet = () => axios.get('/transaction/expense-categories');
const periodDataGet = () => axios.get('/transaction/period-data');

/* USER */
const balancePatch = data => axios.patch('/user/balance', data);
const userDataGet = () => axios.get('/user');

export default {
  token,
  signUp,
  logIn,
  logOut,
  incomePost,
  incomeGet,
  expensePost,
  expenseGet,
  transactionDelete,
  incomeCategoriesGet,
  expenseCategoriesGet,
  periodDataGet,
  balancePatch,
  userDataGet,
};
