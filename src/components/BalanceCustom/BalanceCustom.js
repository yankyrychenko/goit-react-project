import React, {useState} from 'react';
import style from './BalanceCustom.module.scss'
import BalanceModal from '../BalanceModal/BalanceModal'

const initialState = {
  balance: ''
}

const BalanceCustom = () => {
  const [balance, setBalance] = useState({...initialState})

  const balanceHandler = ({ target }) => {
    const {name, value } = target
    setBalance(state =>({...state, [name]:value}))
  }

  const balanceSubmit = e => {
    e.preventDefault()

  }
  console.log(balance);
  return (
    <div className={style.balanceWrapper} >
      <p className={style.balanceText}>Баланс:</p>
      <form className={style.balanceForm} onSubmit={balanceSubmit}>
        <input onChange={balanceHandler} className={style.balanceInput} type="number" name="balance" placeholder=" 00.00 UAH" value={balance.balance} />
        <button className={style.balanceButton}>ПОДТВЕРДИТЬ</button>
        {balance.balance > 0 ? '' : <BalanceModal/> }

      </form>
    </div>
  );
};

export default BalanceCustom;