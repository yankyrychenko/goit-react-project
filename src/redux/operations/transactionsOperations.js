import api from '../../services/kapusta-api';
import actions from '../actions/transactionsActions';

const handleIncomePost = data => dispatch => {
  dispatch(actions.incomePostRequest());

  api
    .incomePost(data)
    .then(({ data }) => dispatch(actions.incomePostSuccess(data)))
    .catch(error => dispatch(actions.incomePostError(error.message)));
};

const handleIncomeGet = () => dispatch => {
  dispatch(actions.incomeGetRequest());

  api
    .incomeGet()
    .then(({ data }) => dispatch(actions.incomeGetSuccess(data)))
    .catch(error => dispatch(actions.incomeGetError(error.message)));
};

const handleExpensePost = data => dispatch => {
  dispatch(actions.expensePostRequest());

  api
    .expensePost(data)
    .then(({ data }) => dispatch(actions.expensePostSuccess(data)))
    .catch(error => dispatch(actions.expensePostError(error.message)));
};

const handleExpenseGet = () => dispatch => {
  dispatch(actions.expenseGetRequest());

  api
    .expenseGet()
    .then(({ data }) => dispatch(actions.expenseGetSuccess(data)))
    .catch(error => dispatch(actions.expenseGetError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handleIncomePost,
  handleIncomeGet,
  handleExpensePost,
  handleExpenseGet,
};
