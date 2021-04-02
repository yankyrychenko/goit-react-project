import actions from '../actions/transactionDeleteActions';
import api from '../../services/kapusta-api';

const handleDeleteIncome = id => dispatch => {
  dispatch(actions.transactionIncomeDeleteRequest());

  api
    .transactionDelete(id)
    .then(() => {
      dispatch(actions.transactionIncomeDeleteSuccess(id));
    })
    .catch(error =>
      dispatch(actions.transactionIncomeDeleteError(error.message)),
    );
};

const handleDeleteExpence = id => dispatch => {
  dispatch(actions.transactionExpenceDeleteRequest());

  api
    .transactionDelete(id)
    .then(() => {
      dispatch(actions.transactionExpenceDeleteSuccess(id));
    })
    .catch(error =>
      dispatch(actions.transactionExpenceDeleteError(error.message)),
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export { handleDeleteIncome, handleDeleteExpence };
