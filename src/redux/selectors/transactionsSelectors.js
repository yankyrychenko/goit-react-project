const getExpenseTransaction = state => state.transactions.expenses.expenses;
const getIncomeTransaction = state => state.transactions.incomes.incomes;
const getAllransactions = state => state.auth.user.transactions;
const getTransactions = state => state.transactions; // wtf?

export default {
  getExpenseTransaction,
  getIncomeTransaction,
  getAllransactions,
  getTransactions,
};
