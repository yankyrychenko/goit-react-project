import actions from '../actions/authActions';
import api from '../../services/kapusta-api';

const handleIncomePost = data => dispatch => {
  dispatch(actions.incomePostRequest());

  api()
    .incomePost(data)
    .then(({ data }) => dispatch(actions.incomePostSuccess(data)))
    .catch(error => dispatch(actions.incomePostError(error.message)));
};

const handleIncomeGet = () => dispatch => {
  dispatch(actions.incomeGetRequest());

  api()
    .incomePost()
    .then(({ data }) => dispatch(actions.incomeGetSuccess(data)))
    .catch(error => dispatch(actions.incomeGetError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { handleIncomePost, handleIncomeGet };
