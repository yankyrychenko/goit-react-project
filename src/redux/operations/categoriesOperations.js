import actions from '../actions/categoriesActions';
import api from '../../services/kapusta-api';

const handleIncomeCategGet = () => dispatch => {
  dispatch(actions.incomeCategRequest());

  api
    .incomeCategoriesGet()
    .then(({ data }) => dispatch(actions.incomeCategSuccess(data)))
    .catch(error => dispatch(actions.incomeCategError(error.message)));
};

const handleExpenseCategGet = () => dispatch => {
  dispatch(actions.expenseCategRequest());

  api
    .expenseCategoriesGet()
    .then(({ data }) => dispatch(actions.expenseCategSuccess(data)))
    .catch(error => dispatch(actions.expenseCategError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { handleIncomeCategGet, handleExpenseCategGet };
