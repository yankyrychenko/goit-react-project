import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import style from './BalanceCustom.module.scss'
import BalanceModal from '../BalanceModal/BalanceModal'
import { getUserBalance } from '../../redux/selectors/authSelectors'
import {addBalance} from '../../redux/operations/balanceOperations'

const initialState = {
  newBalance: ''
}

const BalanceCustom = () => {
  const [newBalance, setNewBalance] = useState({...initialState })
  const dispatch = useDispatch()

  const balanceHandler = ({ target }) => {
    const {name, value } = target
    setNewBalance(state =>({...state, [name]:value}))
  }
  const balanceSubmit = e => {
    e.preventDefault()
    console.log(newBalance);
    dispatch(addBalance(newBalance))
  }
  const currentBalance = useSelector(state => getUserBalance(state))

  return (
    <div className={style.balanceWrapper} >
      <p className={style.balanceText}>Баланс:</p>
      <form className={style.balanceForm} onSubmit={balanceSubmit}>
        <input onChange={balanceHandler} className={style.balanceInput} type="number" name="newBalance" placeholder={currentBalance} value={newBalance.newBalance} />
        <button className={style.balanceButton}>ПОДТВЕРДИТЬ</button>
        {newBalance.newBalance > 0 ? '' : <BalanceModal />
        }
      </form>
    </div>
  );
};

export default BalanceCustom;