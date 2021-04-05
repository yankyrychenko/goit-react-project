const getExpenseTransaction = state => state.transactions.expenses.expenses;
const getIncomeTransaction = state => state.transactions.incomes.incomes;
const getAllransactions = state => state.auth.user.transactions;
const getTransactions = state => state.transactions; // wtf?

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getExpenseTransaction,
  getIncomeTransaction,
  getAllransactions,
  getTransactions,
};
