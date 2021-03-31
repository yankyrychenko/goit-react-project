import actions from '../actions/expenseActions';
import api from '../../services/kapusta-api';

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
export default { handleExpensePost, handleExpenseGet };
