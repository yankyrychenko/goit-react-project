const getExpenseTransaction = state => state.transactions.expenses.expenses;
const getIncomeTransaction = state => state.transactions.incomes.incomes;
const getTransactions = state => state.transactions;
const getAllransactions = state => state.auth.user.transactions;

export default {
  getExpenseTransaction,
  getIncomeTransaction,
  getTransactions,
  getAllransactions,
};
