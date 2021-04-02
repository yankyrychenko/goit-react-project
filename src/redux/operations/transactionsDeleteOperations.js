import actions from '../actions/transactionDeleteActions';
import api from '../../services/kapusta-api';

const handleTransactionDelete = id => dispatch => {
  dispatch(actions.transactionDeleteRequest());

  api
    .transactionDelete(id)
    .then(() => {
      dispatch(actions.transactionDeleteSuccess(id))
    })
    .catch(error => dispatch(actions.transactionDeleteError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { handleTransactionDelete };
