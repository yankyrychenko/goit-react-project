import { createSelector } from 'reselect';

export const getIncomeTotal = state => state.periodData?.incomes?.incomeTotal;

export const getExpenseTotal = state => state.periodData?.expenses?.expenseTotal;
