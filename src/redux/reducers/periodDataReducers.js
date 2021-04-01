import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/periodDataActions';

const intialState = {
  incomes: {
    total: 12000,
    incomesData: {
      'З/П': {
        total: 12000,
        Аванс: 5000,
        Основная: 7000,
      },
    },
  },
  expenses: {
    total: 5200,
    incomesData: {
      Транспорт: {
        total: 4000,
        СТО: 3500,
        Мойка: 500,
        СТО1: 2500,
        СТО2: 310,
        СТО3: 1200,
        СТО4: 2700,
      },
      'Всё для дома': {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
    },
  },
};

// const intialState = 0;

const periodDataReducers = createReducer(intialState, {
  [actions.periodDataGetSuccess]: (state, { payload }) => payload,
});

export default periodDataReducers;
