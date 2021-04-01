import api from '../../services/kapusta-api'
import actions from '../actions/balanceActions'


export const addBalance =  balance  => dispatch => {

  dispatch(actions.addBalanceRequest())

  api.balancePatch(balance).then(({ balance }) => {

    dispatch(actions.addBalanceSuccess(balance))

  }).catch(error => dispatch(actions.addBalanceError(error.message)))

}