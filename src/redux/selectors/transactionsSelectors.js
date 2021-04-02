const getExpenseTransaction = state => state.transactions.expenses.expenses;
const getIncomeTransaction = state => state.transactions.incomes.incomes;
const getTransactions = state => state.transactions;

export default { getExpenseTransaction, getIncomeTransaction, getTransactions };
