import api from '../../services/kapusta-api'
import actions from '../actions/balanceActions'


export const addBalance =  balance  => dispatch => {

  dispatch(actions.addBalanceRequest())

  api.balancePatch(balance).then(({data}) => {
    console.log(balance);
    dispatch(actions.addBalanceSuccess(data.newBalance))

  }).catch(error => dispatch(actions.addBalanceError(error.message)))

}