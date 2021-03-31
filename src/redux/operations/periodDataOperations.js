import api from '../../services/kapusta-api';
import actions from '../actions/periodDataActions';

const getPeriodData = date => async dispatch => {
  dispatch(actions.periodDataGetRequest());
  //   console.log(resp);
  try {
    const resp = await api.periodDataGet(date);
    // console.log(resp.data);
    dispatch(actions.periodDataGetSuccess(resp.data));
  } catch (error) {
    dispatch(actions.periodDataGetError());
  }
};

export default { getPeriodData };
